import React from 'react';
import AboutUs from '../common/AboutUs/AboutUs';
import HeadMainSection from '../components/HeadMainSection/HeadMainSection';
import Address from '../components/HeadMainSection/helpers/Address/Address';
import Allergens from '../components/HeadMainSection/helpers/Alergens/Allergens';
import Information from '../components/HeadMainSection/helpers/Information/Information';
import PhotosCarousel from '../components/HeadMainSection/helpers/Photos/helpers/PhotosCarousel';
import Photos from '../components/HeadMainSection/helpers/Photos/Photos';
import Reservation from '../components/HeadMainSection/helpers/Reservation/Reservation';
import TodaysMenu from '../components/HeadMainSection/helpers/TodaysMenu';
import DetailsPage from '../components/MainItemsSection/helpers/DetailsPage';
import MainItemsSection from '../components/MainItemsSection/MainItemsSection';

const Interface = () => {
  return (
    <section>
      <HeadMainSection />
      <MainItemsSection />
      <DetailsPage />
      <TodaysMenu />
      <AboutUs />
      <Address />
      <Reservation />
      <Allergens />
      <Photos />
      <Information />
      <PhotosCarousel />
    </section>
  );
};

export default Interface;
