import footerBackground from '../assets/Footer.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer
      className="relative text-gray-300 overflow-hidden mt-[2cm]"
      style={{
        minHeight: '10.5cm', 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${footerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between py-10 gap-10 px-6 sm:px-10 lg:px-[2.4cm] w-full">
        
        <div className="lg:w-1/3 flex-shrink-0">
          <span className="text-[#48cc22] text-4xl font-semibold">Power</span>
          <span className="text-[#fc9d1e] text-4xl font-semibold">Org</span>
          <p className="font-semibold mt-3 max-w-md">
            Solar plant services offer end-to-end solutions, including design, installation,
            and maintenance, tailored to meet your energy needs.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 text-sm flex-grow">
          
          <div className="space-y-3">
            <h3 className="tracking-wide font-semibold text-white">Quick Link</h3>
            <ul className="space-y-1">
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">About Us</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Projects</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Service</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Contact Us</a></li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h3 className="tracking-wide font-semibold text-white">Services</h3>
            <ul className="space-y-1">
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Consultancy</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Solar System</a></li>
              <li><a className="hover:text-[#48cc22] font-semibold" href="#">Solar Panel</a></li>
            </ul>
          </div>

          
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-white">Subscribe</h3>
            <p>Let’s subscribe to get the latest update</p>

            
            <form className="w-full max-w-full">
              <label htmlFor="UserEmail" className="sr-only">Email</label>
              <div className="flex flex-col sm:flex-row bg-white max-w-full">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email Address"
                  className="w-full sm:w-[7cm] h-[1.25cm] px-4 text-black text-sm border-none outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-[1.5cm] h-[1.25cm] bg-[#48cc22] hover:bg-[#3aaa1b] flex items-center justify-center transition-all"
                >
                  <i className="fas fa-paper-plane text-white text-lg"></i>
                </button>
              </div>
            </form>

        
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a href="#" title="Facebook" className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition">
                <i className="fab fa-facebook-f text-xs"></i>
              </a>
              <a href="#" title="LinkedIn" className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-110 transition">
                <i className="fab fa-linkedin-in text-xs"></i>
              </a>
              <a href="#" title="Instagram" className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition">
                <i className="fab fa-instagram text-xs"></i>
              </a>
              <a href="#" title="Twitter" className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:scale-110 transition">
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
