import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPlusCircle,
  FaChevronDown,
  FaTimes
} from "react-icons/fa";
import SearchResult from "./searchResult";

const HotelsApartments: React.FC = () => {
  const [showAdditional, setShowAdditional] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [showRoomDropdown, setShowRoomDropdown] = useState(false);
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  const facilities = ["Breakfast", "Lunch", "Dinner", "Soft Drinks"];

  const toggleFacility = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((item) => item !== facility)
        : [...prev, facility]
    );
  };

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const handleRemoveRoom = (index: number) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  // Increment/Decrement “adults” or “children”
  const updateGuests = (index: number, type: "adults" | "children", value: number) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][type] = value;
    setRooms(updatedRooms);
  };

  // Calculate total guests across all rooms
  const totalGuests = rooms.reduce((acc, room) => acc + room.adults + room.children, 0);

  return (
    <div className="flex flex-col gap-6 mt-6 px-4 md:px-0">
      {/* Main Search Section */}
      <div className="flex flex-wrap gap-4 items-end">
        {/* Destinations */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
          <label className="text-sm text-gray-500">Destinations</label>
          <div className="flex items-center border p-3 gap-3 rounded-md shadow-sm hover:shadow-md h-full">
            <FaMapMarkerAlt className="text-gray-400" />
            <input
              type="text"
              placeholder="City, Hotel or Airport"
              className="outline-none border-none w-full bg-transparent text-sm placeholder-gray-500"
            />
          </div>
        </div>

        {/* Check in */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
          <label className="text-sm text-gray-500">Check in</label>
          <div className="flex items-center border p-3 gap-3 rounded-md shadow-sm hover:shadow-md h-full">
            <FaCalendarAlt className="text-gray-400" />
            <input type="date" className="outline-none border-none w-full bg-transparent text-sm" />
          </div>
        </div>

        {/* Check out */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
          <label className="text-sm text-gray-500">Check out</label>
          <div className="flex items-center border p-3 gap-3 rounded-md shadow-sm hover:shadow-md h-full">
            <FaCalendarAlt className="text-gray-400" />
            <input type="date" className="outline-none border-none w-full bg-transparent text-sm" />
          </div>
        </div>

       {/* Room & Guests */}
<div className="relative flex-1 min-w-[200px] flex flex-col gap-1">
  <label className="text-sm text-gray-500">Room & Guests</label>
  <div
    className="flex items-center border p-3 gap-3 rounded-md shadow-sm hover:shadow-md h-full cursor-pointer"
    onClick={() => setShowRoomDropdown(!showRoomDropdown)}
  >
    <span className="text-sm font-medium text-gray-700">
      {rooms.length} room{rooms.length > 1 ? "s" : ""}, {totalGuests} guest
      {totalGuests > 1 ? "s" : ""}
    </span>
    <FaChevronDown className="text-gray-400" />
  </div>

  {showRoomDropdown && (
    <div className="absolute top-14 left-0 bg-white border rounded-lg shadow-lg w-full p-5 z-10">
      {rooms.map((room, index) => (
        <div key={index} className="mb-6 border-b pb-4 last:border-b-0">
          <h3 className="font-semibold text-gray-800 text-lg mb-3">
            Room {index + 1}
          </h3>

          <div className="flex flex-col gap-3">
            {/* Adults */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
              <span className="text-gray-700 font-medium">Adults</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="w-7 h-7 flex items-center justify-center border rounded-md text-gray-700 hover:bg-gray-200 transition"
                  onClick={() => updateGuests(index, "adults", Math.max(1, room.adults - 1))}
                >
                  -
                </button>
                <span className="text-gray-800">{room.adults}</span>
                <button
                  type="button"
                  className="w-7 h-7 flex items-center justify-center border rounded-md text-gray-700 hover:bg-gray-200 transition"
                  onClick={() => updateGuests(index, "adults", room.adults + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
              <span className="text-gray-700 font-medium">Children</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="w-7 h-7 flex items-center justify-center border rounded-md text-gray-700 hover:bg-gray-200 transition"
                  onClick={() => updateGuests(index, "children", Math.max(0, room.children - 1))}
                >
                  -
                </button>
                <span className="text-gray-800">{room.children}</span>
                <button
                  type="button"
                  className="w-7 h-7 flex items-center justify-center border rounded-md text-gray-700 hover:bg-gray-200 transition"
                  onClick={() => updateGuests(index, "children", room.children + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Remove Room (only if more than 1 room) */}
          {index > 0 && (
            <button
              onClick={() => handleRemoveRoom(index)}
              className="mt-3 text-red-500 flex items-center gap-2 text-sm hover:text-red-600 transition"
            >
              <FaTimes className="text-lg" />
              Remove Room
            </button>
          )}
        </div>
      ))}

      {/* Footer buttons */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleAddRoom}
          className="text-blue-600 font-medium hover:text-blue-700 transition"
        >
          + Add Room
        </button>
        <button
          onClick={() => setShowRoomDropdown(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Done
        </button>
      </div>
    </div>
  )}
</div>


        {/* Search Button */}
        <div className="ml-auto">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
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

      {/* Additional Parameters Section */}
      {showAdditional && (
        <div className="flex flex-wrap gap-4 mt-4">
          {/* Guest’s Citizenship */}
          <div className="flex-1 min-w-[200px] flex flex-col">
            <label className="text-sm text-gray-500">Guest’s Citizenship</label>
            <input
              type="text"
              placeholder="Your Citizenship"
              className="border p-3 h-12 outline-none rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Star Level */}
          <div className="flex-1 min-w-[200px] flex flex-col">
            <label className="text-sm text-gray-500">Star Level</label>
            <select className="border p-3 h-12 outline-none rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all">
              <option>Select hotel star level</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </select>
          </div>

          {/* Facilities */}
          <div className="flex-1 min-w-[200px] flex flex-col relative">
            <label className="text-sm text-gray-500">Facilities</label>
            <div
              className="border p-3 h-12 flex justify-between items-center rounded-md shadow-sm cursor-pointer"
              onClick={() => setIsFacilitiesOpen(!isFacilitiesOpen)}
            >
              <span>
                {selectedFacilities.length > 0
                  ? selectedFacilities.join(", ")
                  : "Select Facilities"}
              </span>
              <FaChevronDown className="text-gray-500" />
            </div>

            {isFacilitiesOpen && (
              <div className="absolute top-14 left-0 bg-white border rounded-md shadow-md w-full p-4 z-10">
                {facilities.map((facility) => (
                  <label key={facility} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={selectedFacilities.includes(facility)}
                      onChange={() => toggleFacility(facility)}
                    />
                    <span>{facility}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Free Cancellation */}
          <div className="flex-1 min-w-[200px] flex items-center gap-2 mt-4">
            <input type="checkbox" className="w-5 h-5" />
            <label>Free cancellation</label>
          </div>
        </div>
      )}

      <SearchResult />
    </div>
  );
};

export default HotelsApartments;
