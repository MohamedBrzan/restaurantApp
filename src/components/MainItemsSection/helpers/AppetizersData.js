import React from 'react';
import { useTranslation } from 'react-i18next';
import appetizers1 from '../../../images/items/Appetizers/appetizers1.jpeg';
import appetizers2 from '../../../images/items/Appetizers/appetizers2.jpeg';
import appetizers3 from '../../../images/items/Appetizers/appetizers3.jpeg';
import appetizers4 from '../../../images/items/Appetizers/appetizers4.jpeg';
import appetizers5 from '../../../images/items/Appetizers/appetizers5.jpeg';
import appetizers6 from '../../../images/items/Appetizers/appetizers6.jpeg';
import appetizers7 from '../../../images/items/Appetizers/appetizers7.jpeg';
import appetizers8 from '../../../images/items/Appetizers/appetizers8.jpeg';
import appetizers9 from '../../../images/items/Appetizers/appetizers9.jpeg';
import appetizers10 from '../../../images/items/Appetizers/appetizers10.jpeg';
import appetizers11 from '../../../images/items/Appetizers/appetizers11.jpeg';
import appetizers12 from '../../../images/items/Appetizers/appetizers12.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { getItemDetails } from '../../../store/reducers/reducers';

const AppetizersData = ({ containerDivClassName, list, colSix, colFour }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = [
    {
      title: t('main_category_item_appetizers_1_title'),
      image: appetizers1,
      description: t('main_category_item_appetizers_1_description'),
      price: t('main_category_item_appetizers_1_price'),
    },
    {
      title: t('main_category_item_appetizers_2_title'),
      image: appetizers2,
      description: t('main_category_item_appetizers_2_description'),
      price: t('main_category_item_appetizers_2_price'),
    },
    {
      title: t('main_category_item_appetizers_3_title'),
      image: appetizers3,
      description: t('main_category_item_appetizers_3_description'),
      price: t('main_category_item_appetizers_3_price'),
    },
    {
      title: t('main_category_item_appetizers_4_title'),
      image: appetizers4,
      description: t('main_category_item_appetizers_4_description'),
      price: t('main_category_item_appetizers_4_price'),
    },
    {
      title: t('main_category_item_appetizers_5_title'),
      image: appetizers5,
      description: t('main_category_item_appetizers_5_description'),
      price: t('main_category_item_appetizers_5_price'),
    },
    {
      title: t('main_category_item_appetizers_6_title'),
      image: appetizers6,
      description: t('main_category_item_appetizers_6_description'),
      price: t('main_category_item_appetizers_6_price'),
    },
    {
      title: t('main_category_item_appetizers_7_title'),
      image: appetizers7,
      description: t('main_category_item_appetizers_7_description'),
      price: t('main_category_item_appetizers_7_price'),
    },
    {
      title: t('main_category_item_appetizers_8_title'),
      image: appetizers8,
      description: t('main_category_item_appetizers_8_description'),
      price: t('main_category_item_appetizers_8_price'),
    },
    {
      title: t('main_category_item_appetizers_9_title'),
      image: appetizers9,
      description: t('main_category_item_appetizers_9_description'),
      price: t('main_category_item_appetizers_9_price'),
    },
    {
      title: t('main_category_item_appetizers_10_title'),
      image: appetizers10,
      description: t('main_category_item_appetizers_10_description'),
      price: t('main_category_item_appetizers_10_price'),
    },
    {
      title: t('main_category_item_appetizers_11_title'),
      image: appetizers11,
      description: t('main_category_item_appetizers_11_description'),
      price: t('main_category_item_appetizers_11_price'),
    },
    {
      title: t('main_category_item_appetizers_12_title'),
      image: appetizers12,
      description: t('main_category_item_appetizers_12_description'),
      price: t('main_category_item_appetizers_12_price'),
    },
  ];

  return (
    <section className='item-section' id='appetizers'>
      <h4 className='section-title'>
        <FontAwesomeIcon icon={faUtensils} size='sm' className='px-3' />
        <b>{t('main_category_title_appetizers')}</b>
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

              document.querySelector('.details_content').style.bottom = '0';
              document.querySelector('.details_modal').style.display =
                'block';
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

export default AppetizersData;
