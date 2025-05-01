import { useState } from 'react';
import Frame70 from '../assets/Frame 70.png';
import Frame71 from '../assets/Frame 71.png';
import Frame72 from '../assets/Frame 72.png';
import Frame73 from '../assets/Frame 73.png';
import Frame74 from '../assets/Frame 74.png';
import Frame75 from '../assets/Frame 75.png';
import Frame76 from '../assets/Frame 76.png';
import Frame77 from '../assets/Frame 77.png';
import Frame78 from '../assets/Frame 78.png';
import Search from '../assets/Search icon.svg';
import DropDown from '../assets/dropDown.svg';

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    // First
    {
      id: 1,
      name: '500 W Monocrystalline Panel',
      description: 'Ideal for your Homes or Businesses',
      price: 'N 300,000',
      image: Frame70,
      category: 'panel'
    },
    {
      id: 2,
      name: 'Inverter 3kVA',
      description: 'Best for Residential Use',
      price: 'N 500,000',
      image: Frame71,
      category: 'inverter'
    },
    {
      id: 3,
      name: 'Solar Battery',
      description: 'Perfect for Off-Grid Systems',
      price: 'N 250,000',
      image: Frame72,
      category: 'battery'
    },
    // Second page
    {
      id: 4,
      name: '500 W Monocrystalline Panel',
      description: 'Ideal for your Homes or Businesses',
      price: 'N 300,000',
      image: Frame73,
      category: 'panel'
    },
    {
      id: 5,
      name: 'Inverter 3kVA',
      description: 'Best for Residential Use',
      price: 'N 500,000',
      image: Frame74,
      category: 'inverter'
    },
    {
      id: 6,
      name: 'Solar Battery',
      description: 'Perfect for Off-Grid Systems',
      price: 'N 250,000',
      image: Frame75,
      category: 'battery'
    },
    // Third page
    {
      id: 7,
      name: '500 W Monocrystalline Panel',
      description: 'Ideal for your Homes or Businesses',
      price: 'N 300,000',
      image: Frame76,
      category: 'panel'
    },
    {
      id: 8,
      name: 'Inverter 3kVA',
      description: 'Best for Residential Use',
      price: 'N 500,000',
      image: Frame77,
      category: 'inverter'
    },
    {
      id: 9,
      name: 'Solar Battery',
      description: 'Perfect for Off-Grid Systems',
      price: 'N 250,000',
      image: Frame78,
      category: 'battery'
    }
  ];
  
  const productsPerPage = 3;

  const getCurrentProducts = () => {
    const start = currentPage * productsPerPage;
    const end = start + productsPerPage;
    return products.slice(start, end);
  };
  
  const pageCount = Math.ceil(products.length / productsPerPage);

  return (
    <div className="bg-white">
      <div className="container mt-24 mx-auto px-4 py-8">
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none"
            />
            <button className="absolute right-2 top-2 text-gray-400">
              <img className='mr-3 mx-auto mt-1 w-4 h-4' src={Search} alt="" />
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-48">
              <select className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 focus:outline-none">
                <option>Price Range</option>
                <option>Under N 300,000</option>
                <option>N 300,000 - N 500,000</option>
                <option>Above N 500,000</option>
              </select>
              <div className="absolute right-2 top-2 text-gray-400 pointer-events-none">
                <img className='mr-3 mx-auto mt-1 w-4 h-4' src={DropDown} alt="" />
              </div>
            </div>
            
            <div className="relative w-full md:w-48">
              <select className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 focus:outline-none">
                <option>Categories</option>
                <option>Solar Panel</option>
                <option>Inverter</option>
                <option>Battery</option>
              </select>
              <div className="absolute right-2 top-2 text-gray-400 pointer-events-none">
                <img className='mr-3 mx-auto mt-1 w-4 h-4' src={DropDown} alt="" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-medium mb-6">Our Products</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getCurrentProducts().map((product) => (
            <div key={product.id} className="border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-70 overflow-hidden p-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="font-medium mb-4">{product.price}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mb-12">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}