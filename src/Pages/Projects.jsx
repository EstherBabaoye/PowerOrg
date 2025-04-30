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
    <div className="w-full">
      <div
        className="relative w-full"
        style={{
          height: "650px",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-6 sm:px-12  text-white max-w-[800px]">
          <h1 className="text-5xl md:text-6xl text-white font-semibold leading-snug">
            Powering Businesses with Renewable Energy
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Discover scalable solar and wind energy solutions designed to reduce
            operational costs and carbon footprints for enterprises. Our turnkey
            projects deliver reliable, clean energy to keep your business
            running sustainably.
          </p>

          <Link to="/contact">
            <button className="w-full max-w-xs mt-8 text-base font-bold text-white bg-[#fc9d1e] hover:bg-amber-600 py-4 px-6 rounded-lg transition duration-300 text-center">
              Get a Custom Solar Proposal
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-2xl md:text-3xl font-bold text-black">
          Our Projects
        </p>
        <div className="w-full flex justify-center px-4 sm:px-0">
          <p className="text-sm text-black mt-4 max-w-xl text-center leading-relaxed">
            Variety of products to meet your needs is available. Visit us to
            learn more
            <span className="hidden sm:inline">
              <br />
            </span>
            about our solar energy solutions.
          </p>
        </div>

        <div className="px-6 sm:px-12 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
            {ourprojects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[300px] h-[350px] overflow-hidden shadow-md bg-white">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-sm font-bold text-[#48cc22]">
                  {project.role}
                </p>
                <p className="mt-2 text-lg font-bold text-black">
                  {project.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center px-4 mt-16">
        <button className="w-full md:w-28 h-12 p-3 bg-white mx-auto flex justify-center items-center gap-2 overflow-hidden border-2 border-black transform transition-transform duration-300 hover:scale-105">
          <div className="justify-center text-black text-2xl font-bold font-['Roboto'] leading-normal">
            Next
          </div>
        </button>
      </div>
    </div>
  );
}

export default Projects;
