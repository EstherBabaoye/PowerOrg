import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import forgot from "../assets/forgot.jpg";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.title = "Forget Password – PowerOrg";
  }, []);

  return (
    <div className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12 font-roboto">
            <div className="mb-20">
              <h2 className="text-[40px] text-center text-black font-bold leading-none mb-6">
                Reset Password
              </h2>

              <p className="text-center text-[16px] text-black leading-tight mt-0 mb-12">
                Choose a new password to your account
              </p>

              <form className="space-y-6 mx-auto max-w-sm w-full">
                <div>
                  <label className="block mb-2 text-sm text-black">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-3 pr-12 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-black"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-black">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full px-4 py-3 pr-12 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-3 flex items-center text-black"
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 mt-6 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Reset Password
                </button>

                <Link
                  to="/sign-in"
                  className="w-full bg-white border border-black text-black hover:border-amber-600 font-bold py-3 rounded-lg transition duration-300 block text-center"
                >
                  Back to Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-[509px] mx-auto bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${forgot})` }}
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

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.03-10-7s4.477-7 10-7c1.17 0 2.288.19 3.313.544m3.387 2.556C20.419 9.163 22 11.292 22 12c0 .708-1.58 2.837-3.3 4.1M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3l18 18"
      />
    </svg>
  );
}
