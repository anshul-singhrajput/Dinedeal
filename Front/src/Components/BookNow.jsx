import React, { useContext, useState } from "react";
import { DineContext } from "../context/DineContext";

const BookNow = ({ hotel }) => {
  const { isLoggedIn, addDeal } = useContext(DineContext);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: 1,
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("Please login to book this offer");
      return;
    }

    if (!formData.date || !formData.time || !formData.people) {
      alert("Please fill in all fields");
      return;
    }

    // Combine hotel and form data
    const bookingDetails = {
      hotelId: hotel.id,
      hotelName: hotel.name,
      date: formData.date,
      time: formData.time,
      people: parseInt(formData.people),
    };

    try {
      // Mock API call
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        addDeal(hotel); // Add to booked deals in context
        alert(`Successfully booked ${hotel.name}`);
        setShowForm(false);
        setFormData({ date: "", time: "", people: 1 }); // Reset form
      } else {
        alert("Failed to book the deal. Please try again.");
      }
    } catch (error) {
      console.error("Error booking deal:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mt-3 text-right">
      {!showForm ? (
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setShowForm(true)}
        >
          Book Now
        </button>
      ) : (
        <form
          className="bg-white shadow-lg p-4 rounded-md border mt-2"
          onSubmit={handleBooking}
        >
          <h3 className="text-lg font-semibold mb-4">Booking Details</h3>

          <div className="mb-3">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="people" className="block text-sm font-medium text-gray-700">
              Number of People
            </label>
            <input
              type="number"
              id="people"
              name="people"
              min="1"
              value={formData.people}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              required
            />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookNow;
