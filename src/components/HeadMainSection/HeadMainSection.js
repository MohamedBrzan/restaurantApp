import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logoImage from './../../images/home/home2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendarDays,
  faCircleInfo,
  faImages,
  faLocationDot,
  faPhone,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';
import { FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './HeadMainSection.css';

const HeadMainSection = () => {
  const { t } = useTranslation();

  return (
    <section className='head-main-section'>
      <Container className='home-container'>
        <div className='home-image'></div>
        <Row className='home-row'>
          <Col xs={12} xl={6}>
            <div className='top-sec'>
              <figure>
                <picture>
                  <img src={logoImage} alt='Logo' className='img-thumbnail' />
                </picture>
                <figcaption className='title'>
                  <h3>title</h3>
                </figcaption>
                <figcaption className='title'>
                  <a href='#'>
                    <FaInstagram />
                  </a>
                </figcaption>
              </figure>
              <div className='phone-icon'>
                <a href='tel:123-456-7890'>
                  <FontAwesomeIcon icon={faPhone} size='sm' />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} xl={6} className='m-auto'>
            <Row className='icons-links'>
              <Col
                className='icon-link'
                onClick={() => {
                  document
                    .getElementById('offer-section')
                    .classList.remove('d-none');
                  document
                    .getElementById('todays-offer')
                    .classList.remove('goUp');
                  document
                    .getElementById('offer-modal')
                    .classList.remove('shutdown');
                }}
              >
                <div className='icon'>
                  <div className='new'>{t('main_icons_new')}</div>
                  <FontAwesomeIcon icon={faBuilding} size='sm' />
                </div>
                <div className='text'>{t('main_icons_building_name')}</div>
              </Col>
              <Col
                className='icon-link'
                onClick={() => {
                  document.querySelector('.address_content').style.bottom = '0';
                  document.querySelector('.address_modal').style.display =
                    'block';
                }}
              >
                <div className='icon'>
                  <FontAwesomeIcon icon={faLocationDot} size='sm' />
                </div>
                <div className='text'>{t('main_icons_address_name')}</div>
              </Col>
              <Col
                className='icon-link'
                onClick={() => {
                  document.querySelector('.reservation_content').style.bottom =
                    '0';
                  document.querySelector('.reservation_modal').style.display =
                    'block';
                }}
              >
                <div className='icon'>
                  <FontAwesomeIcon icon={faCalendarDays} size='sm' />
                </div>
                <div className='text'>{t('main_icons_reservation_name')}</div>
              </Col>
              <Col
                className='icon-link'
                onClick={() => {
                  document.querySelector(
                    'section.allergens .allergens_content'
                  ).style.bottom = '0';
                  document.querySelector(
                    'section.allergens .allergens_modal'
                  ).style.display = 'block';
                }}
              >
                <div className='icon'>
                  <FontAwesomeIcon icon={faRecycle} size='sm' />
                </div>
                <div className='text'>{t('main_icons_allergens_name')}</div>
              </Col>
              <Col
                className='icon-link'
                onClick={() => {
                  document.querySelector(
                    'section.photos .photos_content'
                  ).style.bottom = '0';
                  document.querySelector(
                    'section.photos .photos_modal'
                  ).style.display = 'block';
                }}
              >
                <div className='icon'>
                  <FontAwesomeIcon icon={faImages} size='sm' />
                </div>
                <div className='text'>{t('main_icons_photos_name')}</div>
              </Col>
              <Col
                className='icon-link'
                onClick={() => {
                  document.querySelector(
                    'section.information .information_content'
                  ).style.bottom = '0';
                  document.querySelector(
                    'section.information .information_modal'
                  ).style.display = 'block';
                }}
              >
                <div className='icon'>
                  <FontAwesomeIcon icon={faCircleInfo} size='sm' />
                </div>
                <div className='text'>{t('main_icons_information_name')}</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </Container>
    </section>
  );
};

export default HeadMainSection;
