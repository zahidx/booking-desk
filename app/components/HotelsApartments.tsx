import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPlusCircle } from "react-icons/fa";

import SearchResult from "./searchResult";
const HotelsApartments: React.FC = () => {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <div className="flex flex-col gap-6 mt-6 px-4 md:px-0">
      {/* Main Search Section with labels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {/* Destinations */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Destinations</label>
          <div className="flex items-center border p-3 gap-3 rounded-md shadow-sm transition-all hover:shadow-md">
            <FaMapMarkerAlt className="text-gray-400" />
            <input
              type="text"
              placeholder="City, Hotel or Airport"
              className="outline-none border-none w-full bg-transparent text-sm placeholder-gray-500"
            />
          </div>
        </div>

        {/* Check in */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Check in</label>
          <div className="flex items-center border p-3 gap-3 rounded-md shadow-sm transition-all hover:shadow-md">
            <FaCalendarAlt className="text-gray-400" />
            <input
              type="date"
              className="outline-none border-none w-full bg-transparent text-sm"
            />
          </div>
        </div>

        {/* Check out */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Check out</label>
          <div className="flex items-center border p-3 gap-3 rounded-md shadow-sm transition-all hover:shadow-md">
            <FaCalendarAlt className="text-gray-400" />
            <input
              type="date"
              className="outline-none border-none w-full bg-transparent text-sm"
            />
          </div>
        </div>

        {/* Room & Guest */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Room & Guest</label>
          <div className="flex items-center border p-3 gap-3 rounded-md shadow-sm transition-all hover:shadow-md">
            <select className="outline-none border-none w-full bg-transparent text-sm">
              <option>1 room, 2 guests</option>
              <option>2 rooms, 4 guests</option>
              <option>3 rooms, 6 guests</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors w-full">
            Search →
          </button>
        </div>
      </div>

      {/* Toggle Additional Parameters */}
      <div
        className="flex items-center text-gray-700 font-semibold cursor-pointer mt-4"
        onClick={() => setShowAdditional(!showAdditional)}
      >
        <FaPlusCircle className="mr-2 text-gray-500" /> Additional Parameters
      </div>

      {/* Additional Parameters - Initially Hidden */}
      {showAdditional && (
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Guest’s Citizenship */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Guest’s Citizenship</label>
            <input
              type="text"
              placeholder="Your Citizenship"
              className="border p-3 outline-none rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Star Level */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Star Level</label>
            <select className="border p-3 outline-none rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all">
              <option>Select hotel star level</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </select>
          </div>

          {/* Facilities */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Facilities</label>
            <select className="border p-3 outline-none rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all">
              <option>Select facilities</option>
              <option>Free Breakfast</option>
              <option>Swimming Pool</option>
              <option>Gym Access</option>
            </select>
          </div>

          {/* Early Check-in, Check-out & Free Cancellation */}
          <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-4">
            {/* Early Check-in */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Early Check-in</label>
              <div className="flex items-center border p-3 rounded-md gap-3 shadow-sm transition-all hover:shadow-md">
                <FaClock className="text-gray-400" />
                <input
                  type="time"
                  className="outline-none border-none w-full bg-transparent text-sm"
                />
              </div>
            </div>
            
            {/* Early Check-out */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Early Check-out</label>
              <div className="flex items-center border p-3 rounded-md gap-3 shadow-sm transition-all hover:shadow-md">
                <FaClock className="text-gray-400" />
                <input
                  type="time"
                  className="outline-none border-none w-full bg-transparent text-sm"
                />
              </div>
            </div>
            
            {/* Free Cancellation */}
            <div className="flex items-center gap-2 mt-5">
              <input type="checkbox" className="w-5 h-5" />
              <label className="text-gray-700">Free cancellation</label>
            </div>
          </div>
        </div>
      )}

<SearchResult/>
    </div>
  );
};

export default HotelsApartments;
