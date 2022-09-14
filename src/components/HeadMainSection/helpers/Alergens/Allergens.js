import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import allergens1 from '../../../../images/items/Alergens/alergens1.png';
import allergens2 from '../../../../images/items/Alergens/alergens2.png';
import allergens3 from '../../../../images/items/Alergens/alergens3.png';
import allergens4 from '../../../../images/items/Alergens/alergens4.png';
import allergens5 from '../../../../images/items/Alergens/alergens5.png';
import allergens6 from '../../../../images/items/Alergens/alergens6.png';
import allergens7 from '../../../../images/items/Alergens/alergens7.png';
import allergens8 from '../../../../images/items/Alergens/alergens8.png';
import allergens9 from '../../../../images/items/Alergens/alergens9.png';
import allergens10 from '../../../../images/items/Alergens/alergens10.png';
import allergens11 from '../../../../images/items/Alergens/alergens11.png';
import allergens12 from '../../../../images/items/Alergens/alergens12.png';
import allergens13 from '../../../../images/items/Alergens/alergens13.png';
import allergens14 from '../../../../images/items/Alergens/alergens14.png';

import './Allergens.css';
import { useSelector } from 'react-redux';

const Allergens = () => {
  const { t } = useTranslation();
  const { themeColor } = useSelector((state) => state.details);

  const data = [
    {
      title: t('main_icons_allergens_content_1_title'),
      image: allergens1,
      description: t('main_icons_allergens_content_1_description'),
    },
    {
      title: t('main_icons_allergens_content_2_title'),
      image: allergens2,
      description: t('main_icons_allergens_content_2_description'),
    },
    {
      title: t('main_icons_allergens_content_3_title'),
      image: allergens3,
      description: t('main_icons_allergens_content_3_description'),
    },
    {
      title: t('main_icons_allergens_content_4_title'),
      image: allergens4,
      description: t('main_icons_allergens_content_4_description'),
    },
    {
      title: t('main_icons_allergens_content_5_title'),
      image: allergens5,
      description: t('main_icons_allergens_content_5_description'),
    },
    {
      title: t('main_icons_allergens_content_6_title'),
      image: allergens6,
      description: t('main_icons_allergens_content_6_description'),
    },
    {
      title: t('main_icons_allergens_content_7_title'),
      image: allergens7,
      description: t('main_icons_allergens_content_7_description'),
    },
    {
      title: t('main_icons_allergens_content_8_title'),
      image: allergens8,
      description: t('main_icons_allergens_content_8_description'),
    },
    {
      title: t('main_icons_allergens_content_9_title'),
      image: allergens9,
      description: t('main_icons_allergens_content_9_description'),
    },
    {
      title: t('main_icons_allergens_content_10_title'),
      image: allergens10,
      description: t('main_icons_allergens_content_10_description'),
    },
    {
      title: t('main_icons_allergens_content_11_title'),
      image: allergens11,
      description: t('main_icons_allergens_content_11_description'),
    },
    {
      title: t('main_icons_allergens_content_12_title'),
      image: allergens12,
      description: t('main_icons_allergens_content_12_description'),
    },
    {
      title: t('main_icons_allergens_content_13_title'),
      image: allergens13,
      description: t('main_icons_allergens_content_13_description'),
    },
    {
      title: t('main_icons_allergens_content_14_title'),
      image: allergens14,
      description: t('main_icons_allergens_content_14_description'),
    },
  ];

  return (
    <section className='allergens py-5'>
      <div className='allergens_modal'></div>
      <div
        className={
          themeColor === 'theme-dark'
            ? 'allergens_content dark'
            : 'allergens_content light'
        }
      >
        <div className='head-allergens'>
          <div
            id='arrowBtn'
            className='icon'
            onClick={() => {
              document.querySelector('.allergens_content').style.bottom =
                '-100%';
              document.querySelector('.allergens_modal').style.display = 'none';
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' />
          </div>
          <div className='main_allergens_content_title'>
            {t('main_icons_allergens_name')}
          </div>
        </div>
        <Row className='data-row'>
          {data.map((item, index) => (
            <Col xs={12} key={index} className='data-col'>
              <Row>
                <Col xs={2}>
                  <picture>
                    <img
                      src={item.image}
                      alt='Allergens.'
                      className='allergens-image'
                    />
                  </picture>
                </Col>
                <Col>
                  <h6 className='allergens-title'>{item.title}</h6>
                  <p className='allergens-description'>{item.description}</p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Allergens;
