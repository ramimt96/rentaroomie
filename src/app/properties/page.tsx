'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

type Property = {
  id: number
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  description: string
  amenities: string[]
  imageSrc: string
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment in Brooklyn',
    location: 'Williamsburg, Brooklyn, NY',
    price: 3200,
    bedrooms: 2,
    bathrooms: 1,
    description: 'Bright and spacious apartment with modern finishes. Open concept living area, updated kitchen with stainless steel appliances, and hardwood floors throughout.',
    amenities: ['Dishwasher', 'Washer/Dryer', 'Central AC', 'Gym', 'Roof Deck'],
    imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Charming Brownstone Apartment',
    location: 'Park Slope, Brooklyn, NY',
    price: 3800,
    bedrooms: 3,
    bathrooms: 2,
    description: 'Beautiful apartment in a historic brownstone with tons of character. High ceilings, decorative fireplace, and plenty of natural light. Updated kitchen and bathrooms.',
    amenities: ['Dishwasher', 'Laundry in Building', 'Backyard Access', 'Storage Space'],
    imageSrc: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Luxury Highrise with Views',
    location: 'Financial District, Manhattan, NY',
    price: 4500,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Stunning apartment in a full-service luxury building with breathtaking city views. Floor-to-ceiling windows, chef\'s kitchen, marble bathrooms, and custom closets.',
    amenities: ['Doorman', '24/7 Gym', 'Swimming Pool', 'Roof Terrace', 'Parking Available'],
    imageSrc: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    title: 'Spacious Loft in Converted Warehouse',
    location: 'Long Island City, Queens, NY',
    price: 3600,
    bedrooms: 1,
    bathrooms: 1,
    description: 'Unique loft-style apartment in a converted warehouse. Soaring ceilings, exposed brick walls, and oversized windows. Open layout with modern amenities.',
    amenities: ['In-unit Laundry', 'Central AC', 'Pet Friendly', 'Bike Storage', 'Package Room'],
    imageSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

export default function Properties() {
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 10000,
    minBedrooms: 0
  })

  const filteredProperties = properties.filter(property => 
    property.price >= filter.minPrice &&
    property.price <= filter.maxPrice &&
    property.bedrooms >= filter.minBedrooms
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Find Your Perfect Rental
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Browse available properties that match your needs
            </p>
          </div>
          
          {/* Filters */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Filter Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Min Price
                </label>
                <input
                  type="range"
                  id="minPrice"
                  min="0"
                  max="10000"
                  step="100"
                  value={filter.minPrice}
                  onChange={(e) => setFilter({...filter, minPrice: Number(e.target.value)})}
                  className="w-full"
                />
                <span className="text-sm text-gray-500">${filter.minPrice}</span>
              </div>
              <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Max Price
                </label>
                <input
                  type="range"
                  id="maxPrice"
                  min="0"
                  max="10000"
                  step="100"
                  value={filter.maxPrice}
                  onChange={(e) => setFilter({...filter, maxPrice: Number(e.target.value)})}
                  className="w-full"
                />
                <span className="text-sm text-gray-500">${filter.maxPrice}</span>
              </div>
              <div>
                <label htmlFor="minBedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Min Bedrooms
                </label>
                <select
                  id="minBedrooms"
                  value={filter.minBedrooms}
                  onChange={(e) => setFilter({...filter, minBedrooms: Number(e.target.value)})}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                >
                  <option value="0">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={property.imageSrc} 
                  alt={property.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 truncate">{property.title}</h2>
                  <p className="text-purple-600 font-medium mt-1">{property.location}</p>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-2xl font-bold text-gray-900">${property.price}<span className="text-sm font-normal text-gray-500">/month</span></p>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <span className="flex items-center">
                        <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {property.bedrooms} bd
                      </span>
                      <span className="flex items-center">
                        <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {property.bathrooms} ba
                      </span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-600 line-clamp-3">{property.description}</p>
                  
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">Amenities</h3>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {property.amenities.slice(0, 3).map((amenity, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {amenity}
                        </span>
                      ))}
                      {property.amenities.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{property.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      href={`/properties/${property.id}`}
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No properties found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 