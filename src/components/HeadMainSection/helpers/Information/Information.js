import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Information.css';
import { useSelector } from 'react-redux';

const Information = () => {
  const { t } = useTranslation();
  const { themeColor } = useSelector((state) => state.details);

  return (
    <section className='information py-5'>
      <div className='information_modal'></div>
      <div
        className={
          themeColor === 'theme-dark'
            ? 'information_content dark'
            : 'information_content light'
        }
      >
        <div className='head-information'>
          <div
            id='arrowBtn'
            className='icon'
            onClick={() => {
              document.querySelector('.information_content').style.bottom =
                '-100%';
              document.querySelector('.information_modal').style.display =
                'none';
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' />
          </div>
          <div className='main_information_content_title'>
            {t('main_icons_information_name')}
          </div>
        </div>
        <p className='main_icons_information_content'>
          {t('main_icons_information_content')}
        </p>
      </div>
    </section>
  );
};

export default Information;
