import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forgot from "../assets/forgot.jpg";

export default function CheckEmail() {
  useEffect(() => {
    document.title = "Forget Password – PowerOrg";
  }, []);

  return (
    <div className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12 font-roboto">
            <div className=" mb-20">
              <h2 className="text-[40px] text-center text-black font-bold leading-none mb-6">
                Check Your Email
              </h2>

              <p className="text-center text-[16px] text-black leading-tight mt-0 mb-24">
                We have sent an email with password reset information
              </p>

              <div className="mx-auto max-w-sm w-full ">
                <p className="text-center text-[16px] text-black leading-tight mb-0 mt-0 p-0">
                  Didn’t receive an email? Check your spam folder or
                </p>

                <form className="mt-0 pt-0">
                  <button
                    type="submit"
                    className="w-full bg-amber-500 mt-6 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300"
                  >
                    Resend Email
                  </button>
                </form>

                <Link
                  to="/sign-in"
                  className="w-full text-center mt-6 bg-white border border-black text-black hover:border-amber-600 font-bold py-3 rounded-lg transition duration-300 block"
                >
                  Back to Login
                </Link>
              </div>
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
