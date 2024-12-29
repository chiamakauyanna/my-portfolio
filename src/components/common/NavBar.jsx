import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav>
            {/* Desktop Menu */}
            <div className="hidden md:block lg:block">
                <ul className="flex gap-6 text-lg">
                    <li className="hover:border-b-2 hover:border-accent hover:scale-110 border-b border-primary hover:transition duration-300 ease-linear">
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:border-b-2 hover:border-accent hover:scale-110 border-b border-primary hover:transition duration-300 ease-linear">
                        <a href="/about">About</a>
                    </li>
                    <li className="hover:border-b-2 hover:border-accent hover:scale-110 border-b border-primary hover:transition duration-300 ease-linear">
                        <a href="/services">Services</a>
                    </li>
                    <li className="hover:border-b-2 hover:border-accent hover:scale-110 border-b border-primary hover:transition duration-300 ease-linear">
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className="hover:border-b-2 hover:border-accent hover:scale-110 border-b border-primary hover:transition duration-300 ease-linear">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden lg:hidden block">
                <div
                    onClick={toggleNav}
                    aria-label={isNavOpen ? "Close menu" : "Open menu"}
                    className="focus:outline-none"
                >
                    {isNavOpen ? (
                        <FaTimes className="size-6" />
                    ) : (
                        <FaBars className="size-6" />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isNavOpen && (
                <ul className="bg-primary absolute top-20 right-0 h-screen w-1/2 py-4 px-10 space-y-8 text-lg lg:hidden md:hidden block">
                    <li className="text-text">
                        <a href="/" onClick={toggleNav}>
                            Home
                        </a>
                    </li>
                    <li className="text-text">
                        <a href="/about" onClick={toggleNav}>
                            About
                        </a>
                    </li>
                    <li className="text-text">
                        <a href="/services" onClick={toggleNav}>
                            Services
                        </a>
                    </li>
                    <li className="text-text">
                        <a href="/portfolio" onClick={toggleNav}>
                            Portfolio
                        </a>
                    </li>
                    <li className="text-text">
                        <a href="/contact" onClick={toggleNav}>
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
