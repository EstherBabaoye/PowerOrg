import React from 'react'
import Frame104 from '../assets/Frame 104.png'

export default function SignUp() {
  return (
    <main className="relative pt-20 pb-0 bg-white">
      <div className="relative container m-auto px-6 md:px-12 xl:px-40 text-gray-500">
        <div className="m-auto w-full">
          <div className="rounded-xl bg-[#d9d9d9] border border-gray-300 shadow-xl mt-10 mb-4 p-6 sm:p-10 pb-12">
            <div className="space-y-12">
              <h2 className="text-2xl text-center text-black font-bold">
                SignUp To Your Account<br></br> To Get <span className='text-[#41CA1A]'>Started</span>
              </h2>


              <form className="space-y-6 mx-auto max-w-sm w-full">
     
              <div>
                  <label className="block mb-2 text-sm text-black">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
     
                <div>
                  <label className="block mb-2 text-sm text-black">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-black">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-black"> Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>


                <div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300"
                  >
                    Sign Up
                  </button>
                </div>
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
    <span className="font-semibold tracking-wide text-black text-sm transition duration-300 ease-in-out group-hover:text-blue-600 group-hover:bg-amber-100 sm:text-base">
      Continue with Google
    </span>
  </button>

  <button className=" bg-white group w-full h-12 px-4 border border-black rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:border-amber-600 hover:shadow-lg focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center gap-3">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
      className="w-5"
      alt="Facebook logo"
    />
    <span className="font-semibold tracking-wide text-black text-sm transition duration-300 ease-in-out group-hover:text-blue-600 group-hover:bg-amber-100 sm:text-base">
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
      style={{ backgroundImage: `url(${Frame104})` }}
    >
      <p class="pt-32 px-24 h-40 absolute justify-start text-white text-xl md:text-4xl font-bold">Join the Power Of Revolution<br></br> With a Smart and Sustainable<br></br> Solutions</p>

    </div>
    </main>
  )
}
