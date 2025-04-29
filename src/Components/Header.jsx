import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };

    const dropdownContent = {
        'Projects': ['Project 1', 'Project 2', 'Project 3', 'All Projects'],
        'Service': ['Consulting', 'Implementation', 'Support', 'Training'],
        'Contact': ['Email Us', 'Call Us', 'Visit Us', 'Support Ticket'],
        'Products': ['Product A', 'Product B', 'Product C', 'Custom Solutions'],
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white w-full px-4 md:px-24 py-3 flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
                <span className="text-lime-600 text-4xl font-bold font-['Roboto'] leading-9">Power</span>
                <span className="text-amber-500 text-4xl font-bold font-['Roboto'] leading-9">Org</span>
            </div>

            <button
                className="md:hidden block"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex justify-between items-center w-full md:w-auto`}>
                <ul className="flex flex-col md:flex-row justify-start items-center gap-4">
                    {/* Home link */}
                    <li className="flex justify-start items-center gap-1">
                        <Link
                            to="/"
                            className={`text-base font-normal font-['Inter'] leading-10 hover:text-amber-500 ${
                                location.pathname === '/' ? 'text-amber-500' : 'text-neutral-700'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>

                    {/* About Us link */}
                    <li className="flex justify-start items-center gap-1">
                        <Link
                            to="/about-us"
                            className={`text-base font-normal font-['Inter'] leading-10 hover:text-amber-500 ${
                                location.pathname === '/about-us' ? 'text-amber-500' : 'text-neutral-700'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                    </li>

                    {/* Dropdown links */}
                    {['Projects', 'Service', 'Contact', 'Products'].map((name) => {
                        const isActive = location.pathname.startsWith(`/${name.toLowerCase()}`);
                        return (
                            <li key={name} className="relative flex flex-col items-start md:items-center">
                                <button
                                    className={`flex items-center gap-1 text-base font-normal font-['Inter'] leading-10 hover:text-amber-500 ${
                                        isActive ? 'text-amber-500' : 'text-neutral-700'
                                    }`}
                                    onClick={() => toggleDropdown(name)}
                                >
                                    {name}
                                    <svg
                                        className={`w-4 h-4 transition-transform ${
                                            activeDropdown === name ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown menu */}
                                {activeDropdown === name && (
                                    <div className="md:absolute top-full left-0 mt-1 md:mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                                        {dropdownContent[name].map((item) => {
                                            const itemPath = `/${name.toLowerCase() === 'projects' ? 'projects' : `${name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}`;
                                            const isItemActive = location.pathname === itemPath;

                                            return (
                                                <Link
                                                    key={item}
                                                    to={itemPath}
                                                    className={`block px-4 py-2 text-sm hover:bg-amber-50 ${
                                                        isItemActive ? 'text-amber-500 font-semibold' : 'text-neutral-700'
                                                    }`}
                                                    onClick={() => {
                                                        setActiveDropdown(null);
                                                        setIsMenuOpen(false);
                                                    }}
                                                >
                                                    {item}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Right-side buttons */}
                <div className="flex justify-start items-center gap-4 mt-4 ml-8 md:mt-0">
                    <Link to="/sign-in">
                        <button className="w-32 hover:bg-amber-600 rounded-lg p-3 flex justify-center items-center">
                            <span className="text-black text-xl font-bold border-none font-['Roboto']">Sign In</span>
                        </button>
                    </Link>
                    <button className="w-32 p-2 bg-amber-500 hover:bg-amber-600 rounded-lg flex justify-center items-center">
                        <span className="text-white text-xl font-bold font-['Roboto']">Sign Up</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
