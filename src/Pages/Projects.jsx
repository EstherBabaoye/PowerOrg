import React from 'react';
import heroImage from '../assets/Projectshero.jpg';

function Projects() {
  return (
    <div className="w-full">
      {/* Hero Section with overlay */}
      <div
        className="relative w-full"
        style={{
          height: '650px',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay to tone down image */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-6 sm:px-12  text-white max-w-[800px]">
          <h1 className="text-5xl md:text-6xl text-white font-semibold leading-snug">
            Powering Businesses with Renewable Energy
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Discover scalable solar and wind energy solutions designed to reduce operational
            costs and carbon footprints for enterprises. Our turnkey projects deliver
            reliable, clean energy to keep your business running sustainably.
          </p>
        </div>
      </div>

      {/* Page content (with margins) */}
      <div className="w-full px-[2.4cm] mt-12">
        {/* Future content goes here */}
      </div>
    </div>
  );
}

export default Projects;
