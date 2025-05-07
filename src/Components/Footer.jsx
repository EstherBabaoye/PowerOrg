import footerBackground from "../assets/Footer.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      className="relative text-gray-300 overflow-hidden  font-['Roboto']"
      style={{
        minHeight: "10.5cm",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${footerBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between mt-10 pb-32 py-10 gap-10 px-6 sm:px-10 lg:px-[2.4cm] w-full">
        <div className="w-full max-w-[453px] flex-shrink-0">
          <div className="font-bold text-[40px] leading-[30px] tracking-[0%] flex">
            <span className="text-[#48cc22]">Power</span>
            <span className="text-[#fc9d1e]">Org</span>
          </div>

          <p className="font-normal text-[18px] mt-3">
            Solar plant services offer end-to-end solutions, including design,
            installation, and maintenance, tailored to meet your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 text-sm flex-grow w-full max-w-[701px]">
          <div className="space-y-6 text-[16px]">
            <h3 className="tracking-wide font-bold text-white">Quick Link</h3>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-[#48cc22] font-normal"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#48cc22] font-normal"
                  href="/projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-[#48cc22] font-normal" href="/service">
                  Service
                </a>
              </li>
              <li>
                <a className="hover:text-[#48cc22] font-normal" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[16px]">
            <h3 className="tracking-wide font-bold text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <a className="hover:text-[#48cc22] font-normal" href="/service">
                  Consultancy
                </a>
              </li>
              <li>
                <a className="hover:text-[#48cc22] font-normal" href="/service">
                  Solar System
                </a>
              </li>
              <li>
                <a className="hover:text-[#48cc22] font-normal" href="/service">
                  Solar Panel
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-white text-[16px] mb-2">Subscribe</h3>

            <p className="font-normal text-[16px] mt-6 mb-20">
              Let’s subscribe to get the latest update
            </p>

            <form className="w-full max-w-full">
              <label htmlFor="UserEmail" className="sr-only">
                Email
              </label>
              <div className="flex flex-row bg-white max-w-full">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email Address"
                  className="w-[calc(100%-48px)] h-[50px] px-4 text-black text-sm border-none outline-none font-normal"
                />
                <button
                  type="submit"
                  className="w-[48px] h-[50px] bg-[#48cc22] hover:bg-[#3aaa1b] flex items-center justify-center transition-all"
                >
                  <i className="fas fa-paper-plane text-white text-lg"></i>
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="#"
                title="Facebook"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition"
              >
                <i className="fab fa-facebook-f text-xs"></i>
              </a>
              <a
                href="#"
                title="LinkedIn"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-110 transition"
              >
                <i className="fab fa-linkedin-in text-xs"></i>
              </a>
              <a
                href="#"
                title="Instagram"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition"
              >
                <i className="fab fa-instagram text-xs"></i>
              </a>
              <a
                href="#"
                title="Twitter"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:scale-110 transition"
              >
                <i className="fab fa-twitter text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
