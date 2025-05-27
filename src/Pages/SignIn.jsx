import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signin from "../assets/forgot.jpg";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);
      const response = await axios.post("https://powerorg.onrender.com/SignIn", {
        email,
        password,
      });

      if (response.data.message === "Sign in successful") {
        alert(`Welcome ${response.data.name}`);
        navigate("/"); 
        localStorage.setItem("token", response.data.token);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Sign In – PowerOrg";
  }, []);

  return (
    <div className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12 font-roboto">
            <div className="space-y-12">
              <h2 className="text-[40px] text-center text-black font-bold">
                Welcome Back
              </h2>

              <form
                className="space-y-6 mx-auto max-w-sm w-full"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block mb-2 text-sm text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-black">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-black"
                      tabIndex={-1}
                    >
                      {showPassword ? (
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
                      ) : (
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
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer gap-2">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
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

                  <a
                    href="/forgot-password"
                    className="text-sm text-black hover:text-amber-500 transition-colors duration-300"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Sign In
                </button>

                {message && (
                  <p className="text-center text-sm text-red-600 mt-2">
                    {message}
                  </p>
                )}
              </form>

              <div className="relative flex py-5 items-center justify-center">
                <div className="w-40 border-t border-black"></div>
                <span className="flex-shrink mx-4 text-black">or</span>
                <div className="w-40 border-t border-black"></div>
              </div>

              <div className="mx-auto max-w-sm w-full grid space-y-4 pb-20">
                <button className="group w-full h-12 px-4 border border-black rounded-lg transition bg-white duration-300 ease-in-out transform hover:scale-105 hover:border-amber-600 hover:shadow-lg focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    className="w-5"
                    alt="Google logo"
                  />
                  <span className="font-semibold tracking-wide text-black text-sm group-hover:text-blue-600 group-hover:bg-amber-100 sm:text-base">
                    Continue with Google
                  </span>
                </button>

                <button className="group w-full h-12 px-4 border border-black rounded-lg transition bg-white duration-300 ease-in-out transform hover:scale-105 hover:border-amber-600 hover:shadow-lg focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                    className="w-5"
                    alt="Facebook logo"
                  />
                  <span className="font-semibold tracking-wide text-black text-sm group-hover:text-blue-600 group-hover:bg-amber-100 sm:text-base">
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
