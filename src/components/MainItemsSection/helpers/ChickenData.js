import React from 'react';
import { useTranslation } from 'react-i18next';
import chicken1 from '../../../images/items/Chicken/chicken1.jpeg';
import chicken2 from '../../../images/items/Chicken/chicken2.jpeg';
import chicken3 from '../../../images/items/Chicken/chicken3.jpeg';
import chicken4 from '../../../images/items/Chicken/chicken4.jpeg';
import chicken5 from '../../../images/items/Chicken/chicken5.jpeg';
import chicken6 from '../../../images/items/Chicken/chicken6.jpeg';
import chicken7 from '../../../images/items/Chicken/chicken7.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getItemDetails } from '../../../store/reducers/reducers';
import { useDispatch } from 'react-redux';

const ChickenData = ({ containerDivClassName, list, colSix, colFour }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = [
    {
      title: t('main_category_item_chicken_1_title'),
      image: chicken1,
      description: t('main_category_item_chicken_1_description'),
      price: t('main_category_item_chicken_1_price'),
    },
    {
      title: t('main_category_item_chicken_2_title'),
      image: chicken2,
      description: t('main_category_item_chicken_2_description'),
      price: t('main_category_item_chicken_2_price'),
    },
    {
      title: t('main_category_item_chicken_3_title'),
      image: chicken3,
      description: t('main_category_item_chicken_3_description'),
      price: t('main_category_item_chicken_3_price'),
    },
    {
      title: t('main_category_item_chicken_4_title'),
      image: chicken4,
      description: t('main_category_item_chicken_4_description'),
      price: t('main_category_item_chicken_4_price'),
    },
    {
      title: t('main_category_item_chicken_5_title'),
      image: chicken5,
      description: t('main_category_item_chicken_5_description'),
      price: t('main_category_item_chicken_5_price'),
    },
    {
      title: t('main_category_item_chicken_6_title'),
      image: chicken6,
      description: t('main_category_item_chicken_6_description'),
      price: t('main_category_item_chicken_6_price'),
    },
    {
      title: t('main_category_item_chicken_7_title'),
      image: chicken7,
      description: t('main_category_item_chicken_7_description'),
      price: t('main_category_item_chicken_7_price'),
    },
  ];

  return (
    <section className='item-section' id='chicken'>
      <h4 className='section-title'>
        <FontAwesomeIcon icon={faUtensils} size='sm' className='px-3' />
        <b>{t('main_category_title_chicken')}</b>
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

export default ChickenData;
