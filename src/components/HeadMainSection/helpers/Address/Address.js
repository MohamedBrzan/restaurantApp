import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleDown,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import mapImage from '../../../../images/items/Meat/meat1.png';
import Accordion from 'react-bootstrap/Accordion';
import {
  faDiamondTurnRight,
  faLocationPin,
  faShareNodes,
  faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './Address.css';

const Address = () => {
  const { t } = useTranslation();
  const { themeColor } = useSelector((state) => state.details);

  return (
    <section className='address'>
      <div className='address_modal'></div>
      <div
        className={
          themeColor === 'theme-dark'
            ? 'address_content dark'
            : 'address_content light'
        }
      >
        <div className='head-address'>
          <div
            id='arrowBtn'
            className='icon'
            onClick={() => {
              document.querySelector('.address_content').style.bottom = '-100%';
              document.querySelector('.address_modal').style.display = 'none';
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' />
          </div>
          <div className='main_address_content_title'>
            {t('main_address_content_title')}
          </div>
        </div>
        <Row className='justify-content-center align-items-center links'>
          <Col md={8}>
            <figure>
              <picture>
                <img src={mapImage} alt='' className='img-thumbnail' />
              </picture>
            </figure>
          </Col>
          <Col md={4}>
            <div className='link'>
              <div className='direction-icon'>
                <FontAwesomeIcon icon={faDiamondTurnRight} size='sm' />
              </div>
              <div className='direction-link'>
                <a href='#'>{t('main_address_content_direction')}</a>
              </div>
            </div>
            <div className='link'>
              <div className='direction-icon'>
                <FontAwesomeIcon icon={faSquarePhone} size='sm' />
              </div>
              <div className='direction-link'>
                <a href='tel:+01113772369'>{t('main_address_content_call')}</a>
              </div>
            </div>
            <div className='link'>
              <div className='direction-icon'>
                <FontAwesomeIcon icon={faEnvelope} size='sm' />
              </div>
              <div className='direction-link'>
                <a href='mailto:mohamedbrzan11@gmail.com'>
                  {t('main_address_content_email')}
                </a>
              </div>
            </div>
            <div className='link'>
              <div className='direction-icon'>
                <FontAwesomeIcon icon={faShareNodes} size='sm' />
              </div>
              <div className='direction-link'>
                <a href='#'>{t('main_address_content_share')}</a>
              </div>
            </div>
          </Col>
        </Row>
        <div className='address-name'>
          <div className='location-icon'>
            <FontAwesomeIcon icon={faLocationPin} size='sm' />
          </div>
          <div className='location-link'>
            الشهداء, الجبيل, الشرقيه, 35816, SA
          </div>
        </div>
        <Accordion className='m-1'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              {t('main_address_content_status')}
            </Accordion.Header>
            <Accordion.Body className='days-list'>
              <p>{t('main_address_content_days_monday')}</p>
              <p>
                <b>{t('main_address_content_days_tuesday')}</b>
              </p>
              <p>{t('main_address_content_days_wednesday')}</p>
              <p>{t('main_address_content_days_thursday')}</p>
              <p>{t('main_address_content_days_friday')}</p>
              <p>{t('main_address_content_days_saturday')}</p>
              <p>{t('main_address_content_days_sunday')}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Address;
