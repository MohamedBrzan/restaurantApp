import React from 'react';
import { useTranslation } from 'react-i18next';
import sweets1 from '../../../images/items/Sweets/sweets1.jpeg';
import sweets2 from '../../../images/items/Sweets/sweets2.jpeg';
import sweets3 from '../../../images/items/Sweets/sweets3.jpeg';
import sweets4 from '../../../images/items/Sweets/sweets4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getItemDetails } from '../../../store/reducers/reducers';
import { useDispatch } from 'react-redux';

const SweetsData = ({ containerDivClassName, list, colSix, colFour }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = [
    {
      title: t('main_category_item_sweets_1_title'),
      image: sweets1,
      description: t('main_category_item_sweets_1_description'),
      price: t('main_category_item_sweets_1_price'),
    },
    {
      title: t('main_category_item_sweets_2_title'),
      image: sweets2,
      description: t('main_category_item_sweets_2_description'),
      price: t('main_category_item_sweets_2_price'),
    },
    {
      title: t('main_category_item_sweets_3_title'),
      image: sweets3,
      description: t('main_category_item_sweets_3_description'),
      price: t('main_category_item_sweets_3_price'),
    },
    {
      title: t('main_category_item_sweets_4_title'),
      image: sweets4,
      description: t('main_category_item_sweets_4_description'),
      price: t('main_category_item_sweets_4_price'),
    },
  ];

  return (
    <section className='item-section' id='sweets'>
      <h4 className='section-title'>
        <FontAwesomeIcon icon={faUtensils} size='sm' className='px-3' />
        <b>{t('main_category_title_sweets')}</b>
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
    </section>
  );
};

export default SweetsData;
