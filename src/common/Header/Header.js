import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import i18n from 'i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Container from 'react-bootstrap/Container';
import './Header.css';
import { useDispatch } from 'react-redux';
import { getThemeColor } from '../../store/reducers/reducers';

function Header() {
  const { t } = useTranslation();
  const currentLanguageCode = Cookies.get('i18next') || 'en';

  const dispatch = useDispatch();

  const languages = [
    {
      code: 'ar',
      name: 'العربية',
      country_code: 'sa',
      dir: 'rtl',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
  ];

  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const globalIcon = (
    <FontAwesomeIcon icon={faGlobe} size='2x' className='mx-2' />
  );

  // function to set a given theme/color-scheme
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.className = '';
    document.body.classList.add(themeName);
    document.querySelectorAll('footer .links .link a').forEach((aLink) => {
      if (themeName === 'theme-dark') {
        aLink.classList.add('theme-dark');
        document.querySelector('.footer_content').classList.add('theme-dark');
      } else {
        aLink.classList.remove('theme-dark');
        document
          .querySelector('.footer_content')
          .classList.remove('theme-dark');
      }
    });
  }

  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      dispatch(getThemeColor('theme-light'));
    } else {
      setTheme('theme-dark');
      dispatch(getThemeColor('theme-dark'));
    }
  }

  const themeColor = localStorage.getItem('theme');

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';

    // Immediately invoked function to set the theme on initial load
    (function () {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
      } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
      }
    })();

    // eslint-disable-next-line no-unused-expressions
    themeColor === 'theme-light'
      ? document.body.classList.add('theme-light')
      : themeColor === 'theme-dark'
      ? document.body.classList.add('theme-dark')
      : '';
  }, [currentLanguage, themeColor]);

  return (
    <header className='header'>
      <Container>
        {' '}
        <Row className='justify-content-evenly align-items-center'>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant='link'>{globalIcon}</Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.map(({ code, name, country_code }, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => i18n.changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                  >
                    <Row>
                      <Col
                        className={`fi fi-${country_code} ${
                          code === currentLanguageCode
                            ? 'opacity-25'
                            : 'opacity-1'
                        }`}
                      ></Col>
                      <Col>{name}</Col>
                    </Row>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <label id='switch' className='switch'>
              <input type='checkbox' onChange={toggleTheme} id='slider' />
              <span className='slider round'></span>
            </label>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
