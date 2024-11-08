import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-primary text-white p-4 flex justify-center items-center">
            <div className="max-w-[1320px] w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                           
                            <p className="logo-name ml-2">Restaurant</p>
                        </div>
                        <nav className="hidden md:flex ml-6">
                            <ul className="flex space-x-6">
                                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                                <li><a href="#testimonial" className="hover:text-gray-400">Portfolio</a></li>
                                <li><a href="#book" className="hover:text-gray-400">Clients</a></li>
                                <li><a href="#food" className="hover:text-gray-400">Blog</a></li>
                                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-[#FEBF00] w-[157px] text-black h-[44px]">
                            Book a Table
                        </button>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-primary w-full absolute top-full left-0 py-4 px-6 text-center shadow-lg">
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="block text-white py-2 px-4 rounded hover:bg-gray-700">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="block text-white py-2 px-4 rounded hover:bg-gray-700">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="block text-white py-2 px-4 rounded hover:bg-gray-700">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#clients" className="block text-white py-2 px-4 rounded hover:bg-gray-700">
                                Clients
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="block text-white py-2 px-4 rounded hover:bg-gray-700">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block text-white py-2 px-4 rounded hover:bg-gray-700">
                                Contact
                            </a>
                        </li>
                        <li>
                            <button className="w-full bg-[#FEBF00] text-black py-2 px-4 rounded mt-4">
                                Book a Table
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
