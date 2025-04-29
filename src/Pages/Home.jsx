import HeaderImg from '../assets/man-with-white-helmet-near-solar-panel.png';
import VisionImg from '../assets/Vision image.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import frame5 from '../assets/Frame 5.png'
import frame21 from '../assets/Frame 21.png'
import frame18 from '../assets/Frame 18.png'
import solutionImg from '../assets/solution image.png'
import arrow from '../assets/Vector.png'
import consultant from '../assets/consultation image.png'
import Ellipse from '../assets/Ellipse 7.png'

function Home() {
  useEffect(() => {
    document.title = 'Home – PowerOrg';
  }, []);
  return (
    <>
      {/* Hero Section - Made responsive */}
      <div
        style={{ backgroundImage: `url(${HeaderImg})` }}
        className="h-[600px] md:h-[800px] relative bg-stone-900/30 bg-cover bg-center"
      >
        <div className="absolute left-4 md:left-[108px] top-[100px] md:top-[185px] inline-flex flex-col justify-start items-start gap-7">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-center gap-4">
              <div className="w-6 h-0 origin-top-left -rotate-90 outline outline-4 outline-offset-[-2px] outline-amber-500"></div>
              <span className="text-white/70 text-lg md:text-xl font-medium font-['Roboto'] leading-tight">
                Reliable Solar Energy for Every Company and Organization
              </span>
            </div>
            <h1 className="w-full md:w-[667px] text-white text-4xl md:text-7xl font-bold font-['Roboto'] leading-[48px] md:leading-[72px]">
              Bringing Affordable & Clean Power to Your Doorstep
            </h1>
            <p className="w-full md:w-[561px] text-white text-base font-normal font-['Roboto'] leading-normal">
              We provide smart, affordable solar solutions to help you cut down electricity bills and enjoy 24/7 power.
              Whether it's your organization or business, we've got a solar system that fits your needs. Built for
              reliability and long-term savings.
            </p>
          </div>
          <Link to="/about-us">
            <button className="w-60 h-14 p-3 bg-amber-500 rounded-lg flex justify-center items-center">
              <span className="text-white text-2xl font-bold font-['Roboto'] leading-normal">Learn More</span>
            </button>
          </Link>

        </div>
      </div>

      {/* Vision Section - Made responsive */}
      <div className="w-full max-w-[1343px] px-4 md:px-0 mx-auto h-auto md:h-[633px] relative mt-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Text Section */}
          <div className="w-full md:w-[837px] relative md:top-[145px] inline-flex flex-col gap-7 md:pl-16">
            <p className="text-black text-3xl md:text-5xl font-bold font-['Roboto'] leading-[48px]">
              Our Vision
            </p>
            <p className="text-neutral-700 text-lg md:text-xl font-normal font-['Roboto'] leading-loose tracking-tight">
              Our vision is to be a recognized leader in the renewable energy sector, driving the global transition to clean, sustainable power through innovative solar solutions. We aim to empower organizations, companies, and communities by providing accessible, efficient, and environmentally responsible energy systems that contribute to a greener future, reduce carbon footprints, and promote long-term economic growth.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 md:mt-0 md:top-[108px] w-full md:w-auto">
            <img
              className="shadow-[8px_8px_15px_rgba(98,92,92,1)] rounded-md w-full md:w-[490px] h-auto md:h-[525px]"
              src={VisionImg}
              alt="Our Vision"
            />
          </div>
        </div>
      </div>

      {/* Energy Solutions Section - Made responsive */}
      <div className="flex justify-center">
        <div className="w-full md:w-[746px] px-4 md:px-0 mt-12 gap-7 mb-16">
          <div className="text-center text-black pb-4 text-3xl md:text-5xl font-bold font-['Roboto'] leading-[48px]">All Energy Solutions</div>
          <div className="text-neutral-700 text-center text-lg md:text-2xl font-normal font-['Roboto'] leading-7 md:leading-10 tracking-wide">Variety of products to meet your needs is available.Visit us to learn more about our solar energy solutions </div>
        </div>
      </div>

      {/* Products Grid - Made responsive */}
      <div className='flex justify-center px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-xl'>
          <div className='items-baseline-last pt-0 md:pt-32'>
            <img className='w-full md:w-96 h-auto md:h-96' src={frame21} alt="" />
            <p className='text-center font-medium'>SOLAR PANEL</p>
            <p className='text-center font-bold'>Smart System Control</p>
          </div>
          <div>
            <img className='w-full md:w-96 h-auto md:h-96' src={frame5} alt="" />
            <p className='text-center font-medium'>SOLAR SYSTEM</p>
            <p className='text-center font-bold'>Home Installation</p>
          </div>
          <div className='items-baseline-last pt-0 md:pt-32'>
            <img className='w-full md:w-96 h-auto md:h-96' src={frame18} alt="" />
            <p className='text-center font-medium'>SOLAR PROJECT</p>
            <p className='text-center font-bold'>Custom Build Plans</p>
          </div>
        </div>
      </div>

      {/* Services Button - Made responsive */}
      <div className='flex justify-center px-4'>
        <Link to="/projects">
          <button className="w-full md:w-72 h-14 p-3 bg-amber-500 mx-auto rounded-lg flex justify-center items-center gap-2 overflow-hidden">
            <div className="justify-center text-white text-2xl font-bold font-['Roboto'] leading-normal">All Services</div>
          </button>
        </Link>

      </div>

      {/* Solutions Section - Made responsive */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 bg-neutral-50 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image section */}
          <div className="w-full md:w-1/2">
            <div className="bg-black/25 rounded-lg overflow-hidden">
              <img src={solutionImg} alt="Solar energy engineer in orange safety vest standing in front of solar panels" className="w-full h-auto" />
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 mt-6 bg-lime-600 origin-top-left -rotate-90"></div>
              <span className="text-lime-600 text-lg font-medium">SUSTAINABLE SOLUTIONS</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">Power Your Business with Smart, Flexible Energy Solutions</h2>

            <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
              Our energy solutions are built for the future—designed to reduce costs, cut down carbon emissions, and improve daily operations for companies and organizations. From solar panels to wind systems, we provide hybrid setups tailored to your energy needs.
            </p>

            {/* Feature points */}
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-orange-400 flex items-center justify-center">
                  <img src={arrow} alt="" />
                </div>
                <p className="text-neutral-700 text-base md:text-lg">Solar and wind systems optimized for commercial use.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-orange-400 flex items-center justify-center">
                  <img src={arrow} alt="" />
                </div>
                <p className="text-neutral-700 text-base md:text-lg">Hybrid solutions that improve energy efficiency and cost savings.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="">
              <Link to="/service">
                <button className="w-full md:w-auto px-8 md:px-14 py-4 border-2 border-black rounded-lg text-black text-lg md:text-xl font-bold hover:bg-black hover:text-white transition-colors">
                  All Services
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Consultation Section - Made responsive */}
      <div
        style={{ backgroundImage: `url(${consultant})` }}
        className="h-auto md:h-[424px] bg-no-repeat bg-cover bg-center"
      >
        <div className="w-full md:w-[1000px] p-8 md:pl-44 inline-flex flex-col justify-start items-start gap-7">
          <p className="self-stretch pt-8 md:pt-20 justify-start text-white text-3xl md:text-5xl font-bold font-['Roboto'] leading-[48px]">Get A Solar Consultation</p>
          <p className="self-stretch justify-start text-white text-base md:text-xl font-normal font-['Roboto'] leading-loose">Get expert guidance on the best solar energy solutions for your organization. Our team evaluates your energy needs, budget, and site conditions to design a customized solar plan that maximizes efficiency and savings. From system recommendations to installation timelines, we'll walk you through every step — no guesswork, just clarity.</p>
          <div className="w-full md:w-72 h-16 p-3 bg-orange-400 rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden">
            <Link to="/contact">
              <button className="text-center justify-start text-white text-xl md:text-2xl font-bold font-['Roboto'] leading-normal">Book a Consultation</button>
            </Link>

          </div>
        </div>
      </div>

      {/* Testimonials Section - Made responsive */}
      <section className='flex flex-col md:flex-row justify-around py-12 md:py-20 px-4 md:px-0 bg-[#EFF6ED] items-center gap-10 mt-12 md:mt-20'>
        <div className='w-full md:w-[525px]'>
          <h2 className='text-3xl md:text-[48px] font-semibold leading-none pb-2'>What our partners say about us
          </h2>
          <p className='text-base md:text-lg'>
            At <span className='text-[#41CA1A] text-lg md:text-[20px]'>Power</span><span className='text-[#FF9E1B]'>Org</span>, we're committed to helping businesses switch to smarter, sustainable energy solutions. Our clients appreciate the cost savings, smooth installation process, and ongoing support we provide.Their feedback drives us to deliver even better service every day.
          </p>
        </div>
        <div className="inline-flex flex-col justify-start items-start w-full md:w-auto">
          <img className="w-24 h-24 rounded-full" src={Ellipse} />
          <div className="w-full md:w-[589px] self-stretch h-auto md:h-96 relative bg-white overflow-hidden p-4 md:p-0">
            <div className="px-2 inline-flex flex-col md:pl-10 pt-8 md:pt-24 italic text-lg md:text-[20px] justify-start items-start gap-2">
              <p className="self-stretch justify-start text-neutral-700 text-base md:text-xl font-normal font-['Poppins'] leading-loose">Switching to solar with this company was one of the best decisions we've made for our operations. The system was installed seamlessly, and we're already seeing major savings. Highly recommended!</p>
              <p className="self-stretch justify-start text-black text-lg md:text-xl font-bold font-['Inter'] leading-loose">Richard Abiola</p>
              <p className="self-stretch justify-start text-orange-400 text-lg md:text-xl font-bold font-['Poppins'] leading-loose">Facility Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;