import React from "react";
import { useEffect } from "react";
import signin from "../assets/forgot.jpg";

export default function SignIn() {
  useEffect(() => {
    document.title = "Sign In – PowerOrg";
  }, []);

  return (
    <div className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12">
            <div className="space-y-24">
              <h2 className="text-2xl text-center text-black font-bold">
                Welcome Back
              </h2>

              <form className="space-y-6 mx-auto max-w-sm w-full">
                <div>
                  <label className="block mb-2 text-sm text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer gap-2">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="remember"
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 bg-gray-100 border border-black rounded peer-checked:bg-amber-500"></div>
                      <svg
                        className="absolute w-4 h-4 text-white top-0.5 left-0.5 hidden peer-checked:block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-black">Remember me</span>
                  </label>

                  <div>
                    <a
                      href="/forgot-password"
                      className="text-sm text-black hover:text-amber-500 transition-colors duration-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <div className="relative flex py-5 items-center justify-center">
                <div className="w-40 border-t border-black"></div>
                <span className="flex-shrink mx-4 text-black">or</span>
                <div className="w-40 border-t border-black"></div>
              </div>

              <div className="mx-auto max-w-sm w-full grid space-y-4 pb-20">
                <button className="group w-full h-12 px-4 border border-black rounded-lg transition duration-300 hover:border-amber-600 focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    className="w-5"
                    alt="Google logo"
                  />
                  <span className="font-semibold tracking-wide text-black text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Google
                  </span>
                </button>

                <button className="group w-full h-12 px-4 border border-black rounded-lg transition duration-300 hover:border-amber-600 focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                    className="w-5"
                    alt="Facebook logo"
                  />
                  <span className="font-semibold tracking-wide text-black text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Facebook
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-[509px] mx-auto bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${signin})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <p className="pt-32 px-6 sm:px-12 absolute z-20 text-white text-[40px] font-bold">
          Join the Power Of Revolution
          <br />
          With a Smart and Sustainable
          <br />
          Solutions
        </p>
      </div>
    </div>
  );
}
