import React, { useState, useEffect } from "react";
import { Restraunt, cafe, IcecreameParler } from "../assets/assets.js";
import BookNow from "./BookNow";

const HotelOffer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [cafeData, setCafeData] = useState([]);
  const [iceCreamParlorData, setIceCreamParlorData] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    setTimeout(() => {
      setRestaurantData(Restraunt);
      setCafeData(cafe);
      setIceCreamParlorData(IcecreameParler);
    }, 500);
  }, []);

  const renderCards = (data) => (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1">
      {data.map((hotel) => (
        <div
          key={hotel.id}
          className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 relative"
        >
          <div className="relative">
            <img
              src={hotel.image[0]}
              alt={hotel.name}
              className="h-40 w-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {hotel.offer}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
              {hotel.name}
            </h3>
            <p className="text-sm text-gray-600">{hotel.category}</p>
            <div className="flex items-center justify-between mt-2 text-gray-500">
              <span className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h6m-6 0H6m6 0v6m8-6c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z"
                  />
                </svg>
                <span className="ml-1">{hotel.rating}</span>
              </span>
              <span className="text-sm">{hotel.deliveryTime}</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">{hotel.location}</div>

            {/* Replace the button with the BookNow component */}
            <div className="mt-3 text-right">
              <BookNow hotel={hotel} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Restaurants
      </h2>
      {renderCards(restaurantData)}

      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Cafe</h2>
      {renderCards(cafeData)}

      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Ice Cream Parlors
      </h2>
      {renderCards(iceCreamParlorData)}
    </>
  );
};

export default HotelOffer;
