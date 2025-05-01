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
    <div className="w-full mb-20 font-['Roboto'] overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full rounded-br-[120px] overflow-hidden"
        style={{
          height: "650px",
          backgroundImage: `url(${contacthero})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-br-[120px] z-10" />
        <div className="absolute inset-0 flex justify-center px-6 sm:px-12 text-white text-center z-20">
          <div className="max-w-[800px] mt-36 sm:mt-52 md:mt-64 lg:mt-72">
            <h1 className="text-[32px] sm:text-[40px] font-bold mb-8 leading-snug">
              Get In Touch With Us
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-semibold leading-relaxed">
              Let's Power Your Future With Clean Energy
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative pt-20 pb-10 bg-white">
        <div className="w-full px-6 md:px-10 lg:px-[2.4cm]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 lg:gap-12 xl:gap-16">
            {/* Left Column */}
            <div className="w-full lg:w-[60%]">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-6 text-black leading-tight">
                Connect With Us For Your Solar Energy Needs
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-black mb-6 leading-relaxed">
                Reach out for support, whether you’re ready to switch or just
                have questions — we’re here to help you. Fill out the form, and a
                PowerOrg Solar expert will get back to you shortly.
              </p>

              <div className="w-full md:w-[362px] bg-gray-100 rounded-full px-4 py-2 flex items-center gap-4 shadow-md mb-4">
                <div className="flex -space-x-3">
                  {[avatar1, avatar2, avatar3, avatar4, avatar5].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Customer service rep ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <p className="text-black font-medium whitespace-nowrap">
                  Talk to our Solar Expert
                </p>
              </div>

              <div className="mt-2 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
                <div className="text-yellow-400 flex items-center text-lg">
                  ★ ★ ★ ★ <span className="w-[20px] text-gray-300 inline-block">★</span>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="inline-block w-[35px]">(4.5)</span>
                  <span className="inline-block w-[150px] font-medium">
                    12k+ ratings on Google
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
                {[
                  {
                    icon: <MapPinIcon className="w-5 h-5" />,
                    title: "Address",
                    text: (
                      <>
                        Plot 173 Adeniji Adele Road
                        <br />
                        Lagos Island, Lagos State, Nigeria
                      </>
                    ),
                    color: "text-orange-500",
                  },
                  {
                    icon: <PhoneIcon className="w-5 h-5" />,
                    title: "Call Us",
                    text: "+234 805 609 6000",
                    color: "text-black",
                  },
                  {
                    icon: <EnvelopeIcon className="w-5 h-5" />,
                    title: "Send Us an Email",
                    text: "support@powerorg.com",
                    color: "text-black",
                  },
                  {
                    icon: <ClockIcon className="w-5 h-5" />,
                    title: "Opening Time",
                    text: "Mon–Fri: 8:00 AM – 4:00 PM",
                    color: "text-black",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="w-full flex items-start gap-4 bg-gray-100 rounded-xl px-6 py-3 shadow-xl"
                  >
                    <div
                      className={`w-10 h-10 bg-white ${card.color} rounded-full flex items-center justify-center`}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-black">{card.title}</h3>
                      <p className="text-[10px] text-gray-600 leading-snug">{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="w-full max-w-[446px] pr-0">
              <div className="rounded-xl w-full bg-[#288c54] text-white border border-gray-300 shadow-xl p-6 sm:p-10 pb-12">
                <h2 className="text-2xl font-semibold text-left">Get In Touch</h2>
                <p className="text-base font-light mt-2 mb-10 text-left">
                  You can reach us anytime
                </p>
                <form className="space-y-6 w-full">
                  {["First Name", "Last Name", "Your Email", "Phone Number"].map((placeholder, i) => (
                    <input
                      key={i}
                      type={
                        placeholder === "Your Email"
                          ? "email"
                          : placeholder === "Phone Number"
                          ? "tel"
                          : "text"
                      }
                      className="w-full px-4 py-5 border border-white bg-[#288c54] text-white placeholder-white placeholder:text-left placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder={placeholder}
                      required
                    />
                  ))}
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
