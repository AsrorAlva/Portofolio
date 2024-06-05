import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`wrap-nav ${scrolling ? "scrolling" : ""}`}>
      <div className="logo-nav">
        <a href="https://github.com/AsrorAlva">ALVA</a>
      </div>
      <div className="content-nav">
        <Link smooth to="#home">
          Home
        </Link>
        <Link smooth to="#about">
          About
        </Link>
        <Link smooth to="#portfolio">
          Portfolio
        </Link>
        <Link smooth to="#contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
