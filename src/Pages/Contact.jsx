import React, { useEffect } from "react";
import contacthero from "../assets/contacthero.jpg";
import avatar1 from "../assets/1.jpg";
import avatar2 from "../assets/2.jpg";
import avatar3 from "../assets/3.jpg";
import avatar4 from "../assets/4.jpg";
import avatar5 from "../assets/5.jpg";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

function Contact() {
  useEffect(() => {
    document.title = "Contact – PowerOrg";
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="relative w-full rounded-br-[120px] overflow-hidden"
        style={{
          height: "650px",
          backgroundImage: `url(${contacthero})`,
          backgroundSize: "cover",
          backgroundPositionY: "-100px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-br-[120px]"></div>
        <div className="absolute inset-0 flex justify-center px-6 sm:px-12 text-white text-center">
          <div className="max-w-[800px] mt-52 sm:mt-64 md:mt-72">
            <h1 className="text-4xl md:text-4xl font-bold mb-8 leading-snug">
              Get In Touch With Us
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-2xl font-semibold leading-relaxed">
              Let's Power Your Future With Clean Energy
            </p>
          </div>
        </div>
      </div>

      <div className="relative pt-20 pb-10 bg-white">
        <div className="w-full px-6 md:px-10 lg:px-[2.4cm]">
          <div className="flex flex-col lg:flex-row justify-between gap-0">
            <div className="w-full lg:w-1/2 ">
              <h1 className="text-[28px] md:text-[38px] font-bold mb-6 text-black">
                Connect With Us For Your Solar Energy Needs
              </h1>
              <p className="text-black text-[21px] mb-6">
                Reach out for support, whether you’re ready to switch or just
                have questions — we’re here to help you. Fill out the form, and
                a PowerOrg Solar expert will get back to you shortly.
              </p>

              <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-4 shadow-md w-fit mb-4">
                <div className="flex -space-x-3">
                  <img
                    src={avatar1}
                    alt="avatar1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={avatar2}
                    alt="avatar2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={avatar3}
                    alt="avatar3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={avatar4}
                    alt="avatar4"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={avatar5}
                    alt="avatar5"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <p className="text-black font-medium whitespace-nowrap">
                  Talk to our Solar Expert
                </p>
              </div>

              <div className="mt-2 flex items-center gap-2 mb-6">
                <div className="text-yellow-400 flex items-center text-lg">
                  ★ ★ ★ ★ <span className="text-gray-300">★</span>
                </div>
                <p className="text-sm text-gray-700">
                  (4.5) <span className="font-medium">12k+ ratings</span> on
                  Google
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-0 px-15 w-[124%] -mr-[5%]">
                <div className="flex items-start gap-4 bg-gray-100 rounded-xl px-6 py-4 pr-10 shadow-xl mb-4">
                  <div className="w-10 h-10 bg-white text-orange-500 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Address
                    </h3>
                    <p className="text-[10px] text-gray-600 leading-snug">
                      plot 173 Adeniji Adele Road
                      <br />
                      Lagos Island, Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-100 rounded-xl p-5 shadow-xl mb-4">
                  <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Call Us
                    </h3>
                    <p className="text-[10px] text-gray-600">
                      +234 805 609 6000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-100 rounded-xl p-5 shadow-xl">
                  <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Send Us an Email
                    </h3>
                    <p className="text-[10px] text-gray-600">
                      support@powerorg.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-100 rounded-xl p-5 shadow-xl">
                  <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Opening Time
                    </h3>
                    <p className="text-[10px] text-gray-600">
                      Mon–Fri: 8:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 max-w-sm pr-0">
              <div className="rounded-xl w-full bg-[#288c54] text-white border border-gray-300 shadow-xl p-6 sm:p-10 pb-12">
                <h2 className="text-2xl text-white font-semibold text-left">
                  Get In Touch
                </h2>
                <p className="text-base font-light mt-2 mb-10 text-left text-white">
                  You can reach us anytime
                </p>

                <form className="space-y-6 w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-5 border border-white bg-[#288c54] text-white placeholder-white placeholder:text-left placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-5 border border-white bg-[#288c54] text-white placeholder-white placeholder:text-left placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full px-4 py-5 border border-white bg-[#288c54] text-white placeholder-white placeholder:text-left placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="tel"
                    className="w-full px-4 py-5 border border-white bg-[#288c54] text-white placeholder-white placeholder:text-left placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Phone Number"
                    required
                  />
                  <textarea
                    className="w-full resize-none px-4 py-5 border border-white bg-[#288c54] text-white placeholder-white placeholder:text-left placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Message"
                    rows="6"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="rounded px-8 mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
