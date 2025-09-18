import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // ikon hamburger & close

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex justify-between items-center p-4 fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-gray-900/70 backdrop-blur-md" : "bg-blue-900"
                } text-white`}
        >
            {/* Logo */}
            <a href="#Hero" className="text-xl font-bold hover:text-blue-400 transition">
                MyPorto
            </a>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex gap-6">
                <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>

            {/* WhatsApp Button (desktop only) */}
            <a
                href="https://wa.me/6289678904782"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition"
            >
                WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button
                className="sm:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md flex flex-col items-center gap-4 py-6 sm:hidden">
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">About</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Contact</a>
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition"
                    >
                        WhatsApp
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
