import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import forgot from "../assets/forgot.jpg";
import { API_BASE } from "../config";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = new URLSearchParams(location.search).get("token");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Password requirements check
  const passwordChecks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!token) return setMessage("Missing or invalid reset token.");
    if (password !== confirmPassword) return setMessage("Passwords do not match.");

    const isStrong =
      passwordChecks.length &&
      passwordChecks.upper &&
      passwordChecks.lower &&
      passwordChecks.number;

    if (!isStrong) {
      return setMessage("Password does not meet the required criteria.");
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE}/reset-password`, {
        token,
        password,
      });

      setPassword("");
      setConfirmPassword("");
      setMessage("Password reset successful!");
      setSuccess(true);

      setTimeout(() => {
        navigate("/sign-in", { state: { resetSuccess: true } });
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed.");
    } finally {
      setLoading(false);
    }
  };

  const CheckItem = ({ valid, text }) => (
    <li className={`text-sm ${valid ? "text-green-600" : "text-red-600"}`}>
      {valid ? "✔️" : "❌"} {text}
    </li>
  );

  return (
    <div className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12 font-roboto">
            <div className="mb-20">
              <h2 className="text-[40px] text-center text-black font-bold mb-6">
                Reset Password
              </h2>
              <p className="text-center text-[16px] text-black mb-12">
                Choose a new password for your account
              </p>

              <form
                className="space-y-6 mx-auto max-w-sm w-full"
                onSubmit={handleSubmit}
              >
                {/* New Password */}
                <div>
                  <label className="block mb-2 text-sm text-black">New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                  {/* Live Checklist */}
                  <ul className="mt-2 space-y-1">
                    <CheckItem valid={passwordChecks.length} text="At least 8 characters" />
                    <CheckItem valid={passwordChecks.upper} text="At least one uppercase letter" />
                    <CheckItem valid={passwordChecks.lower} text="At least one lowercase letter" />
                    <CheckItem valid={passwordChecks.number} text="At least one number" />
                  </ul>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block mb-2 text-sm text-black">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-black"
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-500 mt-6 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300 flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Resetting...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>

                {/* Message */}
                {message && (
                  <p
                    className={`text-center text-sm mt-2 ${
                      success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

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
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.03-10-7s4.477-7 10-7c1.17 0 2.288.19 3.313.544m3.387 2.556C20.419 9.163 22 11.292 22 12c0 .708-1.58 2.837-3.3 4.1M3 3l18 18" />
    </svg>
  );
}
