import React from 'react';
import Image from 'next/image';

function SearchResult() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-3xl font-bold mb-8">
        Demo Hotel Search Results
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Hotel Card 1 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 flex">
          <div className="flex items-center justify-center w-24 h-24 mt-4 pl-2">
            <Image 
              src="/images/hotel.png" 
              alt="Hotel" 
              width={96} // Set the desired width
              height={96} // Set the desired height
              className="object-cover rounded-l-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Hotel Sunshine</h2>
            <div className="text-yellow-500 mb-2">★★★★☆</div>
            <div className="text-gray-600">New York, USA</div>
          </div>
        </div>
        {/* Hotel Card 2 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 flex">
          <div className="flex items-center justify-center w-24 h-24 mt-4 pl-2">
            <Image 
              src="/images/hotel.png" 
              alt="Hotel" 
              width={96}
              height={96}
              className="object-cover rounded-l-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Ocean Resort</h2>
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <div className="text-gray-600">Miami, USA</div>
          </div>
        </div>
        {/* Hotel Card 3 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 flex">
          <div className="flex items-center justify-center w-24 h-24 mt-4 pl-2">
            <Image 
              src="/images/hotel.png" 
              alt="Hotel" 
              width={96}
              height={96}
              className="object-cover rounded-l-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Mountain Retreat</h2>
            <div className="text-yellow-500 mb-2">★★★☆☆</div>
            <div className="text-gray-600">Denver, USA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
