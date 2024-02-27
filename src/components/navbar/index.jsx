import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo-full.png";
import Hamburger from "./hamburger.jsx";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    };
  }, []);
  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0 w-full bg-slate-950 transition-all duration-300 ${!scroll ? "md:bg-transparent" : "bg-slate-950"
        } `}
    >
      <nav className="max-w-[66rem] mx-auto bg-transparent flex justify-between items-center p-[1rem]">
        <img src={Logo} alt="mie gacoan" width={60} />
        <ul className="hidden gap-10 justify-end font-semibold md:flex">
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="about"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="galery"
              spy={true}
              smooth={true}
              offset={-95}
              duration={500}
            >
              galery
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="outlets"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              outlets
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="testimonial"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              testimonial
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="menu"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
            >
              menu
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="order"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              order
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="menu__link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <Hamburger onChange={handleClick} checked={click} />
        </div>
        <div
          className={`bg-slate-950 fixed top-16 p-[1rem] ${click ? "left-0" : "-left-[200%]"
            } right-0 w-full h-[100vh] text-center transition-all duration-500`}
        >
          <ul className="flex flex-col gap-5 justify-end font-semibold md:hidden">
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="home"
                spy={true}
                smooth={true}
                offset={-300}
                duration={0}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="galery"
                spy={true}
                smooth={true}
                offset={-95}
                duration={500}
                onClick={handleClick}
              >
                galery
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="outlets"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
              >
                outlets
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClick}
              >
                testimonial
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="menu"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
                onClick={handleClick}
              >
                menu
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="order"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={handleClick}
              >
                order
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu__link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                onClick={handleClick}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
