import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import TodaysOfferMenu from '../../../images/items/todays-menu-stand.png';

const TodaysMenu = () => {
  const { t } = useTranslation();
  const offerSection = useRef();
  const todaysOffer = useRef();
  const offerModal = useRef();

  return (
    <section
      ref={offerSection}
      className='offer-section d-none'
      id='offer-section'
      onClick={() => {
        todaysOffer.current.classList.add('goUp');
        offerModal.current.classList.add('shutdown');
        setTimeout(() => offerSection.current.classList.add('d-none'), 800);
      }}
    >
      <div ref={todaysOffer} className='todays-offer' id='todays-offer'>
        <figure>
          <picture>
            <img src={TodaysOfferMenu} alt='' />
          </picture>
          <figcaption>{t('todays_menu_offers')}</figcaption>
        </figure>
      </div>
      <div ref={offerModal} className='offer-modal' id='offer-modal'></div>
    </section>
  );
};

export default TodaysMenu;
