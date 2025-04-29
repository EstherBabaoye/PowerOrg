import heroImage from '../assets/hero.png';
import solarJourneyImage from '../assets/our solar journey.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


import johnJude from '../assets/John Jude.png';
import amaraCole from '../assets/Amara Cole.png';
import tobiDaniels from '../assets/Tobi Daniels.png';
import ritaMadu from '../assets/Rita Madu.png';
import samuelAde from '../assets/Samuel Ade.png';
import kelechiMoore from '../assets/Kelechi Moore.png';

function AboutUs() {
  const team = [
    { image: johnJude, name: 'John Jude', role: 'Founder & CEO' },
    { image: amaraCole, name: 'Amara Cole', role: 'Chief Operations Officer' },
    { image: tobiDaniels, name: 'Tobi Daniels', role: 'Head of Solar Installations' },
    { image: ritaMadu, name: 'Rita Madu', role: 'Lead Energy Consultant' },
    { image: samuelAde, name: 'Samuel Ade', role: 'Sustainability and Research Manager' },
    { image: kelechiMoore, name: 'Kelechi Moore', role: 'Marketing & Communications Lead' },
  ];

  useEffect(() => {
    document.title = 'About Us – PowerOrg';
  }, []);

  return (
    <div className="w-full px-6 md:px-10 lg:px-[2.4cm] py-10">

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="w-full lg:max-w-[555px] flex flex-col justify-between">
          <div>
            <p className="text-[#48cc22] font-semibold text-sm mt-4 mb-1">About Us</p>
            <div className="mb-4">
              <p className="text-2xl md:text-3xl text-black font-bold">
                Empowering Companies with Renewable Energy
              </p>
            </div>
            <p className="text-sm leading-relaxed text-black">
              At <span className="text-[#48cc22]">Power</span><span className="text-[#fc9d1e]">Org</span>, we provide innovative and
              reliable solar energy solutions tailored for organizations and companies.
              Our mission is to help businesses transition to clean, cost-effective,
              and sustainable power through expert installation, smart energy management,
              and ongoing support.
            </p>

            <div className="space-y-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#fc9d1e] flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    />
                  </svg>
                </div>
                <p>Hands-on training in solar system operation, maintenance, and energy management</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#fc9d1e] flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    />
                  </svg>
                </div>
                <p>Comprehensive insurance coverage for all solar panels installed</p>
              </div>
            </div>
          </div>

          <Link to="/projects">
            <button className="w-full sm:w-[270px] mt-8 text-xl font-bold text-white bg-[#fc9d1e] hover:bg-amber-600 py-4 rounded-lg transition duration-300">
              Discover Our Solutions
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-[631px] h-auto">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover rounded" />
        </div>
      </div>


      <div className="flex flex-col-reverse lg:flex-row items-start justify-between mt-20 gap-10">
        <div className="w-full lg:w-[13.5cm] h-auto">
          <img src={solarJourneyImage} alt="Our Solar Journey" className="w-full h-full object-cover rounded" />
        </div>

        <div className="w-full lg:w-[555px]">
          <p className="text-2xl md:text-3xl font-bold text-black mb-4">Our Solar Journey</p>
          <p className="text-sm leading-relaxed text-black">
            At <span className="text-[#48cc22]">Power</span><span className="text-[#fc9d1e]">Org</span>, our journey began with a vision to make clean, renewable energy accessible to organizations and communities around the world. What started as a small initiative has grown into a trusted solar energy provider committed to reducing carbon footprints and driving sustainability through innovative solar solutions.
          </p>
        </div>
      </div>


      <div className="text-center mt-16">
        <p className="text-2xl md:text-3xl font-bold text-black">Meet Our Team</p>
        <p className="text-sm text-black mt-4">
          Our solar project developers are committed to offering leading-edge services and solutions for renewable energy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-[300px] h-[350px] overflow-hidden shadow-md bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-bold text-black hover:underline cursor-pointer">
                {member.name}
              </p>
              <p className="text-sm font-bold text-[#48cc22] hover:underline cursor-pointer">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
