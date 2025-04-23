import heroImage from '../assets/hero.png';
import solarJourneyImage from '../assets/our solar journey.png';

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

  return (
    <div className="w-full min-h-screen mt-[38px] px-[2.4cm] mb-[1.5cm]">
      {/* Section 1: Empowering Companies */}
      <div className="flex items-start justify-between gap-12 h-full">
        <div className="w-[555px] h-[511px] flex flex-col justify-between">
          <div>
            <div className="text-[#48cc22] font-semibold text-sm mt-10 mb-1">About Us</div>
            <div className="font-light text-black mb-4 h-[94.5px]">
              <p className="text-3xl text-black font-bold pt-2">
                Empowering Companies with Renewable Energy
              </p>
            </div>
            <div className="text-black text-sm leading-relaxed mb-4">
              At <span className="text-[#48cc22]">Power</span><span className="text-[#fc9d1e]">Org</span>, we provide innovative and
              reliable solar energy solutions tailored for organizations and
              companies. Our mission is to help businesses transition to clean,
              cost-effective, and sustainable power through expert installation,
              smart energy management, and ongoing support.
            </div>
            <div className="text-black text-sm leading-relaxed space-y-4">
              <div className="flex items-center gap-[1cm] mt-8 mb-10">
                <div className="w-10 h-8 rounded-full border-2 border-[#fc9d1e] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    className="w-5 h-5 text-orange-400 font-normal">
                    <path fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <p>Hands-on training in solar system operation, maintenance, and energy management</p>
              </div>
              <div className="flex items-center gap-[1cm] mt-10 mb-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#fc9d1e] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    className="w-5 h-5 text-orange-400 font-normal">
                    <path fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <p>Comprehensive insurance coverage for all solar panels installed</p>
              </div>
            </div>
          </div>
          <button className="w-[270px] mt-[24px] text-xl font-bold text-white bg-[#fc9d1e] hover:bg-black py-4 rounded-lg transition duration-300">
            Discover Our Solutions
          </button>
        </div>

        <div className="w-[631px] h-[520px]">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover rounded" />
        </div>
      </div>

      {/* Section 2: Our Solar Journey */}
      <div className="flex items-start justify-between mt-[90px] gap-[1.8cm]">
        <div className="w-[13.5cm] h-[10cm]">
          <img src={solarJourneyImage} alt="Our Solar Journey" className="w-full h-full object-cover rounded" />
        </div>

        <div className="w-[555px]">
          <div className="font-light text-black mb-[1cm]">
            <p className="text-3xl text-black font-bold pt-2">Our Solar Journey</p>
          </div>
          <div className="text-black text-sm leading-relaxed mt-4 mb-4">
            At <span className="text-[#48cc22]">Power</span>
            <span className="text-[#fc9d1e]">Org</span>, our journey began with a vision to make clean, renewable energy accessible to organizations and communities around the world. What started as a small initiative has grown into a trusted solar energy provider committed to reducing carbon footprints and driving sustainability through innovative solar solutions.
          </div>
        </div>
      </div>

      {/* Section 3: Meet Our Team */}
      <div className="text-center mt-4">
        <div className="font-light text-black mb-8">
          <p className="text-3xl text-black font-bold pt-2">Meet Our Team</p>
        </div>

        <div className="text-black text-sm leading-relaxed mt-4 mb-4">
          Our solar project developers are committed to offering leading-edge services and solutions for renewable energy.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 mt-10 place-items-center">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[354px] h-[402px]  overflow-hidden shadow-md bg-white">
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
