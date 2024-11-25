import React from "react";
import Slider from "react-slick";
import { assets } from "../assets/assets.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const items = [
    { id: 1, name: "Coffee", img: assets.coffee },
    { id: 2, name: "Dhokla", img: assets.dhokla },
    { id: 3, name: "Kachori", img: assets.kachori },
    { id: 4, name: "Pancake", img: assets.pancake },
    { id: 5, name: "Pav Bhaji", img: assets.pavbhaji },
    { id: 6, name: "Poha", img: assets.poha },
    { id: 7, name: "Samosa", img: assets.samosa },
    { id: 8, name: "Shake", img: assets.shake },
    { id: 9, name: "Poori", img: assets.poori },
    { id: 10, name: "Paratha", img: assets.paratha },
  ];

  return (
    <div className="w-full px-4 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">What's on your mind?</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-2">
            <div className="group flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover shadow-md transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
