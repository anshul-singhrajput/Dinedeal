import React from "react";
import Carousel from "../Components/Carousel";
import HotelOffer from "../Components/HotelOffer";

const Offer = () => {
  return (
    <>
      <Carousel />
      <div className="mt-6">
        <HotelOffer />
      </div>
    </>
  );
};

export default Offer;
