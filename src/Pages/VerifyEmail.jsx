import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import forgot from "../assets/forgot.jpg";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = "Verify Email – PowerOrg";

    const verify = async () => {
      if (!token) {
        setMessage("Verification token is missing.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          `http://localhost:5050/verify-email?token=${token}`
        );
        setMessage(res.data.message || "Email verified successfully!");
        setSuccess(true);
      } catch (error) {
        const errMsg =
          error.response?.data?.message ||
          error.response?.data ||
          "Something went wrong.";
        setMessage(errMsg);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [token]);

  return (
    <div className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12 font-roboto">
            <div className="mb-20">
              <h2 className="text-[40px] text-center text-black font-bold leading-none mb-6">
                Verify Email
              </h2>

              <p className="text-center text-[16px] text-black leading-tight mt-0 mb-24">
                {loading ? "Verifying your email..." : message}
              </p>

              {!loading && (
                <div className="mx-auto max-w-sm w-full">
                  <Link
                    to="/sign-in"
                    className="w-full text-center bg-white border border-black text-black hover:border-[#fc9d1e] font-bold py-3 rounded-lg transition duration-300 block"
                  >
                    Back to Login
                  </Link>
                </div>
              )}
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
          Solution
        </p>
      </div>
    </div>
  );
}
