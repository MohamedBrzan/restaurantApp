import React from 'react';
import { useTranslation } from 'react-i18next';
import barbecue_box1 from '../../../images/items/barbecue_box/barbecue_box1.jpeg';
import barbecue_box2 from '../../../images/items/barbecue_box/barbecue_box2.jpeg';
import barbecue_box3 from '../../../images/items/barbecue_box/barbecue_box3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getItemDetails } from '../../../store/reducers/reducers';
import { useDispatch } from 'react-redux';

const BarbecueBoxData = ({ containerDivClassName, list, colSix, colFour }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = [
    {
      title: t('main_category_item_barbecue_box_1_title'),
      image: barbecue_box1,
      description: t('main_category_item_barbecue_box_1_description'),
      price: t('main_category_item_barbecue_box_1_price'),
    },
    {
      title: t('main_category_item_barbecue_box_2_title'),
      image: barbecue_box2,
      description: t('main_category_item_barbecue_box_2_description'),
      price: t('main_category_item_barbecue_box_2_price'),
    },
    {
      title: t('main_category_item_barbecue_box_3_title'),
      image: barbecue_box3,
      description: t('main_category_item_barbecue_box_3_description'),
      price: t('main_category_item_barbecue_box_3_price'),
    },
  ];

  return (
    <section className='item-section' id='barbecue_box'>
      <h4 className='section-title'>
        <FontAwesomeIcon icon={faUtensils} size='sm' className='px-3' />
        <b>{t('main_category_title_barbecue_box')}</b>
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

export default BarbecueBoxData;
