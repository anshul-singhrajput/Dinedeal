import React, { useContext } from "react";
import { DineContext } from "../context/DineContext";

const Deals = () => {
  const { bookedDeals } = useContext(DineContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Deals</h2>
      {bookedDeals.length === 0 ? (
        <p className="text-gray-500">No deals booked yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bookedDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 border"
            >
              <img
                src={deal.image[0]}
                alt={deal.name}
                className="h-32 w-full object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{deal.name}</h3>
              <p className="text-sm text-gray-500">{deal.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Deals;
