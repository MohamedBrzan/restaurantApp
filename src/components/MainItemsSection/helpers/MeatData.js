import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import meat1 from '../../../images/items/Meat/meat1.png';
import meat2 from '../../../images/items/Meat/meat2.jpeg';
import meat3 from '../../../images/items/Meat/meat3.jpeg';
import meat4 from '../../../images/items/Meat/meat4.jpeg';
import meat5 from '../../../images/items/Meat/meat5.jpeg';
import meat6 from '../../../images/items/Meat/meat6.jpeg';
import meat7 from '../../../images/items/Meat/meat7.jpeg';
import meat8 from '../../../images/items/Meat/meat8.jpeg';
import { getItemDetails } from '../../../store/reducers/reducers';

const MeatData = ({ containerDivClassName, list, colSix, colFour }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = [
    {
      title: t('main_category_item_meat_1_title'),
      image: meat1,
      description: t('main_category_item_meat_1_description'),
      price: t('main_category_item_meat_1_price'),
    },
    {
      title: t('main_category_item_meat_2_title'),
      image: meat2,
      description: t('main_category_item_meat_2_description'),
      price: t('main_category_item_meat_2_price'),
    },
    {
      title: t('main_category_item_meat_3_title'),
      image: meat3,
      description: t('main_category_item_meat_3_description'),
      price: t('main_category_item_meat_3_price'),
    },
    {
      title: t('main_category_item_meat_4_title'),
      image: meat4,
      description: t('main_category_item_meat_4_description'),
      price: t('main_category_item_meat_4_price'),
    },
    {
      title: t('main_category_item_meat_5_title'),
      image: meat5,
      description: t('main_category_item_meat_5_description'),
      price: t('main_category_item_meat_5_price'),
    },
    {
      title: t('main_category_item_meat_6_title'),
      image: meat6,
      description: t('main_category_item_meat_6_description'),
      price: t('main_category_item_meat_6_price'),
    },
    {
      title: t('main_category_item_meat_7_title'),
      image: meat7,
      description: t('main_category_item_meat_7_description'),
      price: t('main_category_item_meat_7_price'),
    },
    {
      title: t('main_category_item_meat_8_title'),
      image: meat8,
      description: t('main_category_item_meat_8_description'),
      price: t('main_category_item_meat_8_price'),
    },
  ];
  return (
    <section className='item-section' id='meat'>
      <h4 className='section-title'>
        <FontAwesomeIcon icon={faUtensils} size='sm' className='px-3' />
        <b>{t('main_category_title_meat')}</b>
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

export default MeatData;
