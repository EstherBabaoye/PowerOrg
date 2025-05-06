
import Frame69 from "../assets/Frame 69.png";
import ServiceSolar from "../assets/service solar.png";
import Icon1 from '../assets/ph_solar-panel-bold.svg'
import Icon2 from '../assets/icon-park_solar-energy.svg'
import Icon3 from '../assets/iconoir_battery-indicator.svg'
import Testimonials2 from "../assets/Image testimonial 2.png";
import Testimonial from "../assets/Image Testimonial.png";





export default function Service() {
  return (
    <div className="min-h-screen mt-24 bg-white">

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row max-w-6xl">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Power Your World With <br /> Clean, Reliable Solar <br /> Energy
            </h1>
            <p className="text-gray-600 mb-6">
              Switch to solar and start saving. Clean energy, lower bills and full control over your power.
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Explore Services
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-300 h-64 md:h-[459px] w-full  overflow-hidden">
              <img
              src={ServiceSolar} className="w-full h-full flex items-center justify-center text-gray-500" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Our Service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Service */}
            <div className="border border-gray-200  p-6 transition duration-300 hover:shadow-lg">
              <div className="border border-orange-200 inline-flex p-4  mb-4">
                {/* Icon placeholder */}
                <img
                src={Icon1} className="w-10 h-10 flex items-center justify-center text-orange-500" />
              
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential Solar Installation</h3>
              <p className="text-gray-600 mb-6">
                Custom solar system for your home to maximize savings and sustainability.
              </p>
              <a href="#" className="text-orange-400 hover:text-orange-500 inline-flex items-center">
                Read More 
                <span className="ml-1">→</span>
              </a>
            </div>
            
            {/* Commercial Service */}
            <div className="border border-gray-200  p-6 transition duration-300 hover:shadow-lg">
              <div className="border border-orange-200 inline-flex p-4  mb-4">
                {/* Icon placeholder */}
                <img
                src={Icon2} className="w-10 h-10 flex items-center justify-center text-orange-500" />
              
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Solar System</h3>
              <p className="text-gray-600 mb-6">
                Power Your business with a reliable,cost-effective solar energy solution.
              </p>
              <a href="#" className="text-orange-400 hover:text-orange-500 inline-flex items-center">
                Read More 
                <span className="ml-1">→</span>
              </a>
            </div>
            
            {/* Battery Storage */}
            <div className="border border-gray-200  p-6 transition duration-300 hover:shadow-lg">
              <div className="border border-orange-200 inline-flex p-4  mb-4">
                {/* Icon placeholder */}
               <img
                src={Icon3} className="w-10 h-10 flex items-center justify-center text-orange-500" />
              
              </div>
              <h3 className="text-xl font-semibold mb-3">Battery Storage & Backup</h3>
              <p className="text-gray-600 mb-6">
                Store your solar energy for backup protection and greater energy independence.
              </p>
              <a href="#" className="text-orange-400 hover:text-orange-500 inline-flex items-center">
                Read More 
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-300 h-64 md:h-80 w-full  overflow-hidden">
                {/* Image placeholder */}
                <img
                src={Frame69}
                 className="w-full h-full flex items-center justify-center text-gray-500" />                [Technician with Solar Panel Image]
  
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-2">Why Thousands Trust</h2>
              <div className="text-green-500 text-3xl font-bold mb-8">PowerOrg</div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">✓</div>
                  <span>25-Years Panel Warranty</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">✓</div>
                  <span>Certified Solar Technicians</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">✓</div>
                  <span>Real-Time Energy Monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">✓</div>
                  <span>Fast & Clean Installations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">✓</div>
                  <span>Hands-on training in solar system operation, maintenance, and energy management</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">✓</div>
                  <span>Comprehensive insurance coverage for all solar panels installed</span>
                </li>
              </ul>
              
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-md mt-8 transition duration-300">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Customer Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="border border-gray-200  p-8 transition duration-300 hover:shadow-lg">
              <p className="text-gray-600 italic mb-6">
                "The team was fantastic from start to finish. We are so happy with the results of our solar installation!"
              </p>
              <div className="flex items-center">
                <img
                src={Testimonials2}
                 className="w-12 h-12 bg-gray-300 rounded-full mr-4" />

            
                <div>
                  <h4 className="font-semibold">Joseph Caleb</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200  p-8 transition duration-300 hover:shadow-lg">
              <p className="text-gray-600 italic mb-6">
                "The team was fantastic from start to finish. We are so happy with the results of our solar installation!"
              </p>
              <div className="flex items-center">
                 <img
                src={Testimonial}
                 className="w-12 h-12 bg-gray-300 rounded-full mr-4" />

                <div>
                  <h4 className="font-semibold">Monica Henry</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}