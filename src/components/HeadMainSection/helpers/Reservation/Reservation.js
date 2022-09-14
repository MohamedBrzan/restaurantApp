import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';

import './Reservation.css';
import { useSelector } from 'react-redux';

const Reservation = () => {
  const { t } = useTranslation();
  const { themeColor } = useSelector((state) => state.details);

  const allTabs = document.querySelectorAll('[data-reservation]');
  const allTabsContent = document.querySelectorAll(
    '.reservation .reservation_content .tabs-content div'
  );

  useEffect(() => {
    allTabs.forEach((tab) => {
      tab.onclick = (e) => {
        allTabs.forEach((tab) => {
          tab.classList.remove('active');
        });

        allTabsContent.forEach((content) => {
          content.classList.remove('active');
          if (
            content.getAttribute('id') ===
            e.target.getAttribute('data-reservation')
          ) {
            content.classList.add('active');
            e.target.classList.add('active');
          }
        });
      };
    });
  }, [allTabs, allTabsContent]);

  return (
    <section className='reservation py-5'>
      <div className='reservation_modal'></div>
      <div
        className={
          themeColor === 'theme-dark'
            ? 'reservation_content dark'
            : 'reservation_content light'
        }
      >
        <div className='head-reservation'>
          <div
            id='arrowBtn'
            className='icon'
            onClick={() => {
              document.querySelector('.reservation_content').style.bottom =
                '-100%';
              document.querySelector('.reservation_modal').style.display =
                'none';
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' />
          </div>
          <div className='main_reservation_content_title'>
            {t('main_reservation_content_title')}
          </div>
        </div>

        <div className='tabs'>
          <div className='tab active' data-reservation='book'>
            {t('main_reservation_content_tabs_book')}
          </div>
          <div className='tab' data-reservation='wait'>
            {t('main_reservation_content_tabs_wait')}
          </div>
          <div className='tab' data-reservation='event'>
            {t('main_reservation_content_tabs_event')}
          </div>
        </div>
        <div className='tabs-content'>
          <div id='book' className='active'>
            <p className='py-3'>
              <b> {t('main_reservation_content_booking_information_title')}</b>
            </p>
            <form className='py-5'>
              <p className='row'>
                {' '}
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_information_guest')}
                  </label>
                  <input type='text' required className='guest-input' />
                </p>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_information_date_and_time')}
                  </label>
                  <input type='date' required className='w-25 p-1' />
                  <input type='time' required className='w-25 p-1' />
                </p>
                <p>
                  <b>
                    {t('main_reservation_content_contact_information_title')}
                  </b>
                </p>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_contact_information_name')}
                  </label>
                  <input type='text' className='w-50' required />
                </p>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_contact_information_mobile')}
                  </label>
                  <input type='number' className='w-50' required />
                </p>
              </p>
              <button type='submit' className='btn btn-secondary rounded-30'>
                {t('main_reservation_content_information_book_btn')}
              </button>
            </form>
          </div>

          <div id='wait'>
            <p className='py-3'>
              <b> {t('main_reservation_content_booking_information_title')}</b>
            </p>
            <form className='py-2'>
              <p className='row'>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_contact_information_name')}
                  </label>
                  <input type='text' className='w-50' required />
                </p>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_contact_information_mobile')}
                  </label>
                  <input type='number' className='w-50' required />
                </p>
              </p>
              <button type='submit' className='btn btn-secondary rounded-30'>
                {t('main_reservation_content_contact_information_submit_btn')}
              </button>
            </form>
          </div>
          <div id='event'>
            <p className='py-3'>
              <b> {t('main_reservation_content_booking_information_title')}</b>
            </p>
            <form className='py-5'>
              <p className='row'>
                {' '}
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_information_guest')}
                  </label>
                  <input type='text' required className='guest-input' />
                </p>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_information_date_and_time')}
                  </label>
                  <input type='date' required className='w-25 p-1' />
                  <input type='time' required className='w-25 p-1' />
                </p>
                <p>
                  <b>
                    {t('main_reservation_content_contact_information_title')}
                  </b>
                </p>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_contact_information_name')}
                  </label>
                  <input type='text' className='w-50' required />
                </p>
                <p className='d-flex justify-content-around'>
                  <label htmlFor='name' className='d-block text-start me-5'>
                    {t('main_reservation_content_contact_information_mobile')}
                  </label>
                  <input type='number' className='w-50' required />
                </p>
              </p>
              <button type='submit' className='btn btn-secondary rounded-30'>
                {t('main_reservation_content_contact_information_book_btn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
