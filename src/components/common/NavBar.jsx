import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const links = [
        { url: "#", title: "Home" },
        { url: "#about", title: "About" },
        { url: "#skills", title: "Skills" },
        { url: "#portfolio", title: "Portfolio" },
        { url: "#contact", title: "Contact" },
    ];

    return (
        <nav>
            {/* Desktop Menu */}
            <div className="hidden md:block">
                <ul className="flex gap-6 text-lg text-other">
                    {links.map(({ url, title }) => (
                        <li key={title}>
                            <a
                                href={url}
                                className="hover:border-b-2 hover:border-accent hover:scale-110 border-b border-primary transition duration-300 ease-linear hover:text-accent hover:shadow-md"
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={toggleNav}
                    aria-label={isNavOpen ? "Close menu" : "Open menu"}
                    className="focus:outline-none text-2xl text-other"
                >
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isNavOpen && (
                <ul className="bg-primary absolute top-20 right-0 h-screen w-1/2 py-4 px-10 space-y-8 text-lg lg:hidden md:hidden block text-other">
                    {links.map(({ url, title }) => (
                        <li key={title} className="hover:text-accent duration-300 transition ease-in-out">
                            <a
                                href={url}
                                onClick={toggleNav}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
