import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forgot from "../assets/forgot.jpg";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "Forget Password – PowerOrg";
  }, []);

  return (
    <div className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12 font-roboto">
            <div className="space-y-12 mb-20">
              <h2 className="text-[40px] text-center text-black font-bold leading-none mb-1">
                Forget Password
              </h2>

              <p className="text-center text-[16px] text-black leading-tight mt-0">
                Enter the email you used to create your account so that we can{" "}
                <br />
                send you a link for resetting your password.
              </p>

              <form className="space-y-6 mx-auto max-w-sm w-full mt-10">
                <div>
                  <label className="block mb-2 text-sm text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>

                <div className="flex flex-col gap-4 pt-6">
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300"
                  >
                    Send
                  </button>

                  <Link
                    to="/sign-in"
                    className="w-full text-center bg-white border border-black text-black hover:border-amber-600 font-bold py-3 rounded-lg transition duration-300"
                  >
                    Back to Login
                  </Link>
                </div>
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
