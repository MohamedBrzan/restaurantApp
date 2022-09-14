import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Appetizers from '../../images/menus/menu1.jpg';
import Meat from '../../images/menus/menu2.jpg';
import Chicken from '../../images/menus/menu3.jpeg';
import Sweets from '../../images/menus/menu4.jpeg';
import Drinks from '../../images/menus/menu5.jpeg';
import barbecueBox from '../../images/menus/menu6.jpeg';
import Container from 'react-bootstrap/Container';
import { FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AppetizersData from './helpers/AppetizersData';
import MeatData from './helpers/MeatData';
import ChickenData from './helpers/ChickenData';
import SweetsData from './helpers/SweetsData';
import DrinksData from './helpers/DrinksData';
import BarbecueBoxData from './helpers/BarbecueBox';
import './MainItemsSection.css';

const MainItemsSection = () => {
  const { t } = useTranslation();
  const [containerDivClassName, setContainerDivClassName] = useState('');
  const [list, setList] = useState(false);
  const [colSix, setColSix] = useState(false);
  const [colFour, setColFour] = useState(false);

  const allColsItems = document.querySelectorAll('.category figure');

  const allResponsiveIcons = document.querySelectorAll(
    '.responsive-icons .responsive-icon'
  );

  const allItemSections = document.querySelectorAll('section.item-section');

  useEffect(() => {
    allColsItems.forEach((col) => {
      col.onclick = (e) => {
        if (e.target.parentElement.classList.contains('check')) {
          allItemSections.forEach((allSection) => {
            allSection.classList.remove('d-none');
          });
          e.target.parentElement.classList.remove('check');
        } else {
          allColsItems.forEach((col) => col.classList.remove('check'));
          e.target.parentElement.classList.add('check');
          allItemSections.forEach((itemSection) => {
            itemSection.classList.add('d-none');
            if (
              itemSection.getAttribute('id') ===
              e.target.parentElement.getAttribute('data-select')
            ) {
              itemSection.classList.remove('d-none');
            }
          });
        }
      };
    });

    allResponsiveIcons.forEach((icon) => {
      icon.onclick = (e) => {
        allResponsiveIcons.forEach((icon) => icon.classList.remove('active'));
        e.target.classList.add('active');
        if (e.target.classList.contains('one-list')) {
          setList(true);
          setColSix(false);
          setColFour(false);
          setContainerDivClassName(
            'd-flex justify-content-between align-items-center'
          );
        } else if (e.target.classList.contains('two-list')) {
          setList(false);
          setColSix(true);
          setColFour(false);
          setContainerDivClassName('');
        } else if (e.target.classList.contains('four-list')) {
          setList(false);
          setColSix(false);
          setColFour(true);
          setContainerDivClassName('');
        }
      };
    });
  }, [allColsItems, allItemSections, allResponsiveIcons]);

  return (
    <section className='main-items-section'>
      <Container>
        {' '}
        <Row className='category-nav m-0'>
          <Col className='category' data-select='appetizers-category'>
            <figure data-select='appetizers'>
              <picture>
                <img src={Appetizers} alt='' />
              </picture>
              <figcaption>{t('main_category_nav_items_appetizers')}</figcaption>
              <FaCheck className='check-icon' />
              <div className='pic-modal'></div>
            </figure>
          </Col>
          <Col className='category'>
            <figure data-select='meat'>
              <picture>
                <img src={Meat} alt='' />
              </picture>
              <figcaption>{t('main_category_nav_items_meat')}</figcaption>
              <FaCheck className='check-icon' />
              <div className='pic-modal'></div>
            </figure>
          </Col>
          <Col className='category'>
            <figure data-select='chicken'>
              <picture>
                <img src={Chicken} alt='' />
              </picture>
              <figcaption>{t('main_category_nav_items_chicken')}</figcaption>
              <FaCheck className='check-icon' />
              <div className='pic-modal'></div>
            </figure>
          </Col>
          <Col className='category'>
            <figure data-select='sweets'>
              <picture>
                <img src={Sweets} alt='' />
              </picture>
              <figcaption>{t('main_category_nav_items_sweets')}</figcaption>
              <FaCheck className='check-icon' />
              <div className='pic-modal'></div>
            </figure>
          </Col>
          <Col className='category'>
            <figure data-select='drinks'>
              <picture>
                <img src={Drinks} alt='' />
              </picture>
              <figcaption>{t('main_category_nav_items_drinks')}</figcaption>
              <FaCheck className='check-icon' />
              <div className='pic-modal'></div>
            </figure>
          </Col>
          <Col className='category'>
            <figure data-select='barbecue_box'>
              <picture>
                <img src={barbecueBox} alt='' />
              </picture>
              <figcaption>
                {t('main_category_nav_items_barbecue_box')}
              </figcaption>
              <FaCheck className='check-icon' />
              <div className='pic-modal'></div>
            </figure>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center m-0'>
          <Col
            xs={12}
            md={9}
            lg={10}
            className='search-section position-relative'
          >
            {' '}
            <FormControl
              name='search'
              id='search'
              placeholder={t('main_search_input_placeholder')}
              className='my-3 px-5 search-input'
            />
            <FontAwesomeIcon
              icon={faSearch}
              size='lg'
              className='search-icon'
            />
          </Col>
          <Col xs={12} md={3} lg={2} className='responsive-icons'>
            {' '}
            <div className='responsive-icon one-list'></div>
            <div className='responsive-icon two-list active'></div>
            <div className='responsive-icon four-list'></div>
          </Col>
        </Row>
        <AppetizersData
          containerDivClassName={containerDivClassName}
          list={list}
          colSix={colSix}
          colFour={colFour}
        />
        <MeatData
          containerDivClassName={containerDivClassName}
          list={list}
          colSix={colSix}
          colFour={colFour}
        />
        <ChickenData
          containerDivClassName={containerDivClassName}
          list={list}
          colSix={colSix}
          colFour={colFour}
        />
        <SweetsData
          containerDivClassName={containerDivClassName}
          list={list}
          colSix={colSix}
          colFour={colFour}
        />
        <DrinksData
          containerDivClassName={containerDivClassName}
          list={list}
          colSix={colSix}
          colFour={colFour}
        />
        <BarbecueBoxData
          containerDivClassName={containerDivClassName}
          list={list}
          colSix={colSix}
          colFour={colFour}
        />
      </Container>
    </section>
  );
};

export default MainItemsSection;
