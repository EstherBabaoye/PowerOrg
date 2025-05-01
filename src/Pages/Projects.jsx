import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import heroImage from "../assets/Projectshero.jpg";
import NextGenWindSolutions from "../assets/NextGenWindSolutions.png";
import ElevatedSolarSystems from "../assets/ElevatedSolarSystems.png";
import SolarInsectRobot from "../assets/SolarInsectRobot.png";
import WindPowerPlant from "../assets/WindPowerPlant.png";
import LevelUpSolarSetup from "../assets/LevelUpSolarSetup.png";
import HandsOnSolarTesting from "../assets/HandsOnSolarTesting.png";

function Projects() {
  const ourprojects = [
    {
      image: NextGenWindSolutions,
      name: "Next-Gen Wind Solutions",
      role: "Renewable Tech",
    },
    {
      image: ElevatedSolarSystems,
      name: "Elevated Solar Systems",
      role: "Solar Installation",
    },
    {
      image: SolarInsectRobot,
      name: "Solar Insect Robot",
      role: "Solar Panel",
    },
    { image: WindPowerPlant, name: "Wind Power Plant", role: "Turbine Energy" },
    {
      image: LevelUpSolarSetup,
      name: "Level-Up Solar Setup",
      role: "Tech Engineering",
    },
    {
      image: HandsOnSolarTesting,
      name: "Hands-On Solar Testing",
      role: "Hands on Solar Testing",
    },
  ];
  useEffect(() => {
    document.title = "Projects – PowerOrg";
  }, []);

  return (
    <div className="w-full mt-24 mb-20 font-['Roboto']">
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "650px",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "auto 100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="absolute inset-0 flex flex-col px-6 sm:px-12 text-white max-w-[800px] z-20">
          <h1 className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] mt-20 sm:mt-28 mb-6 font-semibold">
            Powering Businesses with Renewable Energy
          </h1>
          <p className="mt-4 text-[14px] sm:text-[16px] max-w-[550px] font-light leading-relaxed">
            Discover scalable solar and wind energy solutions designed to reduce
            operational costs and carbon footprints for enterprises. Our turnkey
            projects deliver reliable, clean energy to keep your business
            running sustainably.
          </p>
          <Link to="/contact">
            <button className="mt-8 text-[18px] sm:text-[20px] md:text-[24px] font-bold text-white bg-[#fc9d1e] hover:bg-amber-600 py-3 sm:py-4 px-8 sm:px-12 rounded-lg transition duration-300 text-center">
              Get a Custom Solar Proposal
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center mt-16 px-4 sm:px-0">
        <p className="text-[28px] sm:text-[36px] font-bold text-black">Our Projects</p>
        <div className="w-full flex justify-center">
          <p className="text-[14px] sm:text-[16px] text-black mt-4 max-w-xl text-center leading-relaxed">
            Variety of products to meet your needs is available. Visit us to
            learn more
            <span className="hidden sm:inline"><br /></span>
            about our solar energy solutions.
          </p>
        </div>

        <div className="px-6 sm:px-12 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
            {ourprojects.map((project, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-[280px] sm:w-[300px] h-[320px] sm:h-[350px] overflow-hidden shadow-md bg-white">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-[13px] sm:text-[14px] font-bold text-[#48cc22]">
                  {project.role}
                </p>
                <p className="mt-2 text-[18px] sm:text-[20px] font-bold text-black">
                  {project.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 mt-16">
        <button className="w-full sm:w-48 md:w-28 h-12 p-3 bg-white mx-auto flex justify-center items-center gap-2 overflow-hidden border-2 border-black transform transition-transform duration-300 hover:scale-105">
          <div className="text-black text-xl sm:text-2xl font-bold leading-normal">
            Next
          </div>
        </button>
      </div>
    </div>
  );
}

export default Projects;
