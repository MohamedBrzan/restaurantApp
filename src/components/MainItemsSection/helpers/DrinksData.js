import React from 'react';
import { useTranslation } from 'react-i18next';
import drinks1 from '../../../images/items/Drinks/drinks1.jpg';
import drinks2 from '../../../images/items/Drinks/drinks2.jpeg';
import drinks3 from '../../../images/items/Drinks/drinks3.png';
import drinks4 from '../../../images/items/Drinks/drinks4.jpeg';
import drinks5 from '../../../images/items/Drinks/drinks5.jpeg';
import drinks6 from '../../../images/items/Drinks/drinks6.jpeg';
import drinks7 from '../../../images/items/Drinks/drinks7.jpeg';
import drinks8 from '../../../images/items/Drinks/drinks8.jpeg';
import drinks9 from '../../../images/items/Drinks/drinks9.jpeg';
import drinks10 from '../../../images/items/Drinks/drinks10.jpeg';
import drinks11 from '../../../images/items/Drinks/drinks11.jpeg';
import drinks12 from '../../../images/items/Drinks/drinks12.jpeg';
import drinks13 from '../../../images/items/Drinks/drinks13.jpeg';
import drinks14 from '../../../images/items/Drinks/drinks14.png';
import drinks15 from '../../../images/items/Drinks/drinks15.png';
import drinks16 from '../../../images/items/Drinks/drinks16.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getItemDetails } from '../../../store/reducers/reducers';
import { useDispatch } from 'react-redux';

const DrinksData = ({ containerDivClassName, list, colSix, colFour }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = [
    {
      title: t('main_category_item_drinks_1_title'),
      image: drinks1,
      description: t('main_category_item_drinks_1_description'),
      price: t('main_category_item_drinks_1_price'),
    },
    {
      title: t('main_category_item_drinks_2_title'),
      image: drinks2,
      description: t('main_category_item_drinks_2_description'),
      price: t('main_category_item_drinks_2_price'),
    },
    {
      title: t('main_category_item_drinks_3_title'),
      image: drinks3,
      description: t('main_category_item_drinks_3_description'),
      price: t('main_category_item_drinks_3_price'),
    },
    {
      title: t('main_category_item_drinks_4_title'),
      image: drinks4,
      description: t('main_category_item_drinks_4_description'),
      price: t('main_category_item_drinks_4_price'),
    },
    {
      title: t('main_category_item_drinks_5_title'),
      image: drinks5,
      description: t('main_category_item_drinks_5_description'),
      price: t('main_category_item_drinks_5_price'),
    },
    {
      title: t('main_category_item_drinks_6_title'),
      image: drinks6,
      description: t('main_category_item_drinks_6_description'),
      price: t('main_category_item_drinks_6_price'),
    },
    {
      title: t('main_category_item_drinks_7_title'),
      image: drinks7,
      description: t('main_category_item_drinks_7_description'),
      price: t('main_category_item_drinks_7_price'),
    },
    {
      title: t('main_category_item_drinks_8_title'),
      image: drinks8,
      description: t('main_category_item_drinks_8_description'),
      price: t('main_category_item_drinks_8_price'),
    },
    {
      title: t('main_category_item_drinks_9_title'),
      image: drinks9,
      description: t('main_category_item_drinks_9_description'),
      price: t('main_category_item_drinks_9_price'),
    },
    {
      title: t('main_category_item_drinks_10_title'),
      image: drinks10,
      description: t('main_category_item_drinks_10_description'),
      price: t('main_category_item_drinks_10_price'),
    },
    {
      title: t('main_category_item_drinks_11_title'),
      image: drinks11,
      description: t('main_category_item_drinks_11_description'),
      price: t('main_category_item_drinks_11_price'),
    },
    {
      title: t('main_category_item_drinks_12_title'),
      image: drinks12,
      description: t('main_category_item_drinks_12_description'),
      price: t('main_category_item_drinks_12_price'),
    },
    {
      title: t('main_category_item_drinks_13_title'),
      image: drinks13,
      description: t('main_category_item_drinks_13_description'),
      price: t('main_category_item_drinks_13_price'),
    },
    {
      title: t('main_category_item_drinks_14_title'),
      image: drinks14,
      description: t('main_category_item_drinks_14_description'),
      price: t('main_category_item_drinks_14_price'),
    },
    {
      title: t('main_category_item_drinks_15_title'),
      image: drinks15,
      description: t('main_category_item_drinks_15_description'),
      price: t('main_category_item_drinks_15_price'),
    },
    {
      title: t('main_category_item_drinks_16_title'),
      image: drinks16,
      description: t('main_category_item_drinks_16_description'),
      price: t('main_category_item_drinks_16_price'),
    },
  ];

  return (
    <section className='item-section' id='drinks'>
      <h4 className='section-title'>
        <FontAwesomeIcon icon={faUtensils} size='sm' className='px-3' />
        <b>{t('main_category_title_drinks')}</b>
      </h4>
      <hr />
      <Row>
        {data.map((item, index) => (
          <Col
            xs={list ? 12 : colFour ? 6 : 6}
            md={list ? 12 : colFour ? 6 : 6}
            lg={list ? 12 : colFour ? 3 : 6}
            key={index}
            className='container-col'
            onClick={() => {
              dispatch(getItemDetails(item));
              document
                .querySelector('section.details-page')
                .classList.remove('d-none');
            }}
          >
            <div className={containerDivClassName} id='converter'>
              <Col xs={list ? 6 : 12} className='image-container'>
                <picture>
                  <img
                    src={item.image}
                    alt='Appetizers'
                    className={list ? 'item-image' : 'item-image w-100'}
                  />
                </picture>
              </Col>
              <Col md={12} className='content-container'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className='price'>
                  <b>{item.price}</b>
                </div>
              </Col>
            </div>
          </Col>
        ))}
      </Row>
      <hr />
    </section>
  );
};

export default DrinksData;
