'use client';

import { useState, lazy, Suspense } from 'react';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaTrain,
  FaCar
} from 'react-icons/fa';

const HotelsApartments = lazy(() => import('./components/HotelsApartments'));

interface InputWithIconProps {
  icon: React.ElementType;
  placeholder: string;
  type?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ icon: Icon, placeholder, type = "text" }) => {
  return (
    <div className="flex items-center border p-4 flex-1 gap-2">
      {Icon && <Icon className="text-gray-400" />}
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none border-none w-full"
      />
    </div>
  );
};

const tabs = [
  "Hotels & Apartments",
  "Air Ticket",
  "Transfer",
  "Car Rentals",
  "Train Tickets",
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Hotels & Apartments");

  const renderInputFields = () => {
    switch (activeTab) {
      case "Hotels & Apartments":
        return (
          <Suspense fallback={<p>Loading...</p>}>
            <HotelsApartments />
          </Suspense>
        );
      case "Air Ticket":
        return (
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <InputWithIcon icon={FaPlaneDeparture} placeholder="From" />
            <InputWithIcon icon={FaPlaneArrival} placeholder="To" />
            <InputWithIcon icon={FaCalendarAlt} placeholder="Departure Date" type="date" />
          </div>
        );
      case "Transfer":
        return (
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <InputWithIcon icon={FaMapMarkerAlt} placeholder="Pickup Location" />
            <InputWithIcon icon={FaCalendarAlt} placeholder="Pickup Date" type="date" />
            <InputWithIcon icon={FaCalendarAlt} placeholder="Drop-off Date" type="date" />
          </div>
        );
      case "Car Rentals":
        return (
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <InputWithIcon icon={FaCar} placeholder="Pickup Location" />
            <InputWithIcon icon={FaCalendarAlt} placeholder="Pickup Date" type="date" />
            <InputWithIcon icon={FaCalendarAlt} placeholder="Drop-off Date" type="date" />
          </div>
        );
      case "Train Tickets":
        return (
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <InputWithIcon icon={FaTrain} placeholder="Departure Station" />
            <InputWithIcon icon={FaTrain} placeholder="Arrival Station" />
            <InputWithIcon icon={FaCalendarAlt} placeholder="Travel Date" type="date" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full z-50">
      <div className="text-center text-amber-50 pt-[80px] text-5xl font-bold mb-6 relative z-50">
        <h1>Where do you want to go?</h1>
      </div>

      <div className="relative mt-10 mx-auto bg-white p-6 rounded-t-lg w-11/12 md:w-2/3 z-60">
        {/* Mobile dropdown */}
        {/* Mobile dropdown */}
        <div className="block md:hidden mb-4">
          <div className="relative">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="appearance-none w-full p-3 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
            >
              {tabs.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
              </svg>
            </div>
          </div>
        </div>
        {/* Desktop tabs */}
        <nav className="hidden md:flex border-b pb-3 gap-6 text-gray-700 ">
          {tabs.map((item) => (
            <span
              key={item}
              onClick={() => setActiveTab(item)}
              className={`cursor-pointer pb-1 border-b-2 transition-all duration-300 ease-in-out 
                ${activeTab === item ? "border-black" : "border-transparent"}`}
            >
              {item}
            </span>
          ))}
        </nav>

        {renderInputFields()}
      </div>
    </div>
  );
};

export default Home;
