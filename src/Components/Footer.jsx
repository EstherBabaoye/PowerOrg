import footerBackground from '../assets/Footer.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer
      className="relative text-gray-300 overflow-hidden h-[11cm] mt-[2cm]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${footerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0 px-[2.4cm]">
        {/* Branding */}
        <div className="lg:w-1/3 mr-[1.5cm]">
          <span className="text-[#48cc22] text-4xl font-bold">Power</span>
          <span className="text-[#fc9d1e] text-4xl font-bold">Org</span>
          <p className="font-semibold mt-3">
            Solar plant services offer end-to-end solutions, including design, installation,
            and maintenance, tailored to meet your energy needs.
          </p>
        </div>

        {/* Navigation + Subscribe */}
        <div className="grid grid-cols-2 text-sm gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {/* Quick Links */}
          <div className="space-y-3 mr-[2cm]">
            <h3 className="tracking-wide font-semibold text-white">Quick Link</h3>
            <ul className="space-y-1">
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">About Us</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Projects</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Service</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 ">
            <h3 className="tracking-wide font-semibold text-white">Services</h3>
            <ul className="space-y-1">
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Consultancy</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Solar System</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Solar Panel</a></li>
            </ul>
          </div>

          {/* Subscribe + Social */}
          <div className="space-y-3 col-span-2 sm:col-span-2 mr-[2.4cm]">
            <h3 className="font-semibold text-white">Subscribe</h3>
            <p>Let’s subscribe to get the latest update</p>

            {/* Subscription Form */}
            <form className="mt-4 w-[7.5cm]">
              <label htmlFor="UserEmail" className="sr-only">Email</label>
              <div className="flex w-full bg-white">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email Address"
                  className="w-[6cm] px-4 py-3 text-black text-sm border-none outline-none"
                />
                <button
                  type="submit"
                  className="w-[1.5cm] flex items-center justify-center bg-[#48cc22] hover:bg-[#3aaa1b] transition-all"
                >
                  <i className="fas fa-paper-plane text-white text-lg"></i>
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" title="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" title="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-110 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" title="Instagram" className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" title="Twitter" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:scale-110 transition">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
