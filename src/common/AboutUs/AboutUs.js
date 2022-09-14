import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import {
  faArrowAltCircleUp,
  faComments,
} from '@fortawesome/free-regular-svg-icons';
import { FaWhatsapp } from 'react-icons/fa';
import './AboutUs.css';
import { useSelector } from 'react-redux';

const AboutUs = () => {
  const { t } = useTranslation();
  const { themeColor } = useSelector((state) => state.details);

  return (
    <section className='about_us'>
      <div className='about_us_modal'></div>
      <div
        className={
          themeColor === 'theme-dark'
            ? 'about_us_content dark'
            : 'about_us_content light'
        }
      >
        <div className='about_us_head'>
          <div
            id='arrowBtn'
            className='icon'
            onClick={() => {
              if (
                document.querySelector('.about_us_body').style.height === '0px'
              ) {
                document.getElementById('arrowBtn').classList.add('rotation');
                document.querySelector('.about_us_body').style.height = '430px';
                document.querySelector('.about_us_modal').style.display =
                  'block';
              } else {
                document.querySelector('.about_us_body').style.height = '0px';
                document
                  .getElementById('arrowBtn')
                  .classList.remove('rotation');

                document.querySelector('.about_us_modal').style.display =
                  'none';
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleUp} size='2x' />
          </div>
          <div className='powered_by'>{t('powered_by')}</div>
        </div>
        <div className='about_us_body'>
          <div className='text_intro'>
            <p className='about_us'>{t('about_us')}</p>
            <p className='about_us_text'>{t('about_us_text')}</p>
            <span className='px-2'>{t('about_us_notice')}</span>
            <Link to='/' className='about_us_btn'>
              {t('about_us_btn')}
            </Link>
          </div>
          <Row className='links'>
            <Col className='link'>
              <Link to='/' className=''>
                <div className='icon'>
                  <FontAwesomeIcon icon={faGlobeAsia} size='2x' />
                </div>
                <div>{t('about_us_website_link')}</div>
              </Link>
            </Col>
            <Col className='link'>
              <Link to='/' className=''>
                <div className='icon'>
                  <FontAwesomeIcon icon={faComments} size='2x' />
                </div>
                <div>{t('about_us_live_chat_link')}</div>
              </Link>
            </Col>
            <Col className='link'>
              <Link to='/' className=''>
                <div className='icon'>
                  <FaWhatsapp size={30} />
                </div>
                <div>{t('about_us_whatsapp_link')}</div>
              </Link>
            </Col>
          </Row>
          <h3 className='about_us_logo_name'>{t('about_us_logo_name')}</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
