import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setHideHeader(true); // scrolling down
    } else {
      setHideHeader(false); // scrolling up
    }
    lastScrollY = window.scrollY;
  };

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${hideHeader ? "hidden-header" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img src={logo} alt="UFS Logo" />
        </a>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {[
              { href: "#home", label: "HOME" },
              { href: "#services", label: "PRODUCTS" },
              { href: "#whyus", label: "ABOUT" },
              { href: "#aboutus", label: "CONTACT" },
            ].map((item, idx) => (
              <li className="nav__item" key={idx}>
                <a href={item.href} className="nav__link" onClick={closeMenu}>
                  <GoArrowUpRight className="nav__arrow" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Close button */}
          <div
            className="nav__close"
            id="nav-close"
            role="button"
            tabIndex="0"
            onClick={closeMenu}
          >
            <IoCloseOutline size={28} />
          </div>
        </div>

        {/* Toggle button */}
        <div
          className="nav__toggle"
          id="nav-toggle"
          role="button"
          tabIndex="0"
          onClick={() => setShowMenu(true)}
        >
          <HiOutlineBars3BottomRight size={28} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
