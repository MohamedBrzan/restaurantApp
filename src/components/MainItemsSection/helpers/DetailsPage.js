import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { details, themeColor } = useSelector((state) => state.details);

  const detailsSection = useRef();
  const detailsModal = useRef();

  return (
    <section className='details-page'>
      {details && (
        <div className='details'>
          <div
            className={
              themeColor === 'theme-light'
                ? 'details_content light'
                : 'details_content dark'
            }
            ref={detailsSection}
          >
            {' '}
            <div className='details_image'>
              <img src={details.image} alt='' className='img-thumbnail' />
            </div>
            <h3 className='details-title'>{details.title}</h3>
            <p className='details-description'>{details.description}</p>
            <div className='details-price'>{details.price}</div>
            <CloseButton
              className='close-button'
              onClick={() => {
                detailsSection.current.style.bottom = '-100%';
                detailsModal.current.style.display = 'none';
              }}
            >
              <div className='x'>
                <FontAwesomeIcon icon={faXmark} size='2x' />
              </div>
            </CloseButton>
          </div>
        </div>
      )}
      <div
        className='details_modal'
        ref={detailsModal}
        onClick={() => {
          detailsSection.current.style.bottom = '-100%';
          detailsModal.current.style.display = 'none';
        }}
      ></div>
    </section>
  );
};

export default DetailsPage;
