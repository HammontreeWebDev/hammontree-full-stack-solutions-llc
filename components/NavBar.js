import React, { useState } from "react";
import { useRouter } from "next/router";
import { BounceInDownHeader } from "../utils/Animations";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function NavBar(props) {
  const router = useRouter();
  const [highlightedButton, setHighlightedButton] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const highlightNav = (e) => {
    setHighlightedButton(e.target.innerText);
    setIsMobileMenuOpen(false);
  };

  const handleClick = (navigateTo) => {
    router.push(navigateTo);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <BounceInDownHeader className="header-bg">

      {/* SVG Background */}
      <Image className="svg-bg" src="/img/navbar.svg" width={1920} height={350} priority={true}></Image>

      <img
        className="nav-img"
        src="/img/trans-web-header.webp"
        alt="Avatar of Kaileb with his name and text that says Full-Stack Web Development"
      />

      <nav className="container-fluid custom-nav">
        {/* Home Button */}
        <button
          className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Home" ? "highlighted" : ""
            }`}
          onClick={(e) => {
            highlightNav(e);
            handleClick("/");
          }}
        >
          Home
        </button>
        {/* About Me Dropdown */}
        <Dropdown>
          <Dropdown.Toggle id="custom-dropdown" className="hvr-wobble-horizontal">
            About
          </Dropdown.Toggle>

          <Dropdown.Menu id="custom-menu">

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Biography" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/about_me");
                }}
              >
                Biography
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Socials" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/socials");
                }}
              >
                Socials
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* How Can I Help Dropdown? */}
        <Dropdown>
          <Dropdown.Toggle id="custom-dropdown" className="hvr-wobble-horizontal">
            How Can I Help?
          </Dropdown.Toggle>
          <Dropdown.Menu id="custom-menu">

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Services" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/services");
                }}
              >
                Services
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Contact Form" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/contact");
                }}
              >
                Contact
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Resume Dropdown */}
        <Dropdown>
          <Dropdown.Toggle id="custom-dropdown" className="hvr-wobble-horizontal">
            Resume
          </Dropdown.Toggle>

          <Dropdown.Menu id="custom-menu">
            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Download" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/resume");
                }}
              >
                Download
              </button>
            </Dropdown.Item>

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Portfolio" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/portfolio");
                }}
              >
                Portfolio
              </button>
            </Dropdown.Item>

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Certifications" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/certifications");
                }}
              >
                Certifications
              </button>
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
      </nav>

      <nav className="custom-mobile-nav">
        {/* Mobile Menu Button*/}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <Icon icon="line-md:menu-unfold-right" />
        </button>

        {/* Mobile Menu */}

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Close out menu button */}
          <button className="close-menu-btn" onClick={toggleMobileMenu}>
          <Icon icon="line-md:close-small" />
            </button>
          {/* Home Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Home" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/");
            }}
          >
            Home
          </button>

          {/* Bio Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Biography" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/about_me");
            }}
          >
            Biography
          </button>

          {/* Socials Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Socials" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/socials");
            }}
          >
            Socials
          </button>

          {/* Services Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Services" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/services");
            }}
          >
            Services
          </button>

          {/* Contact Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Contact" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/contact");
            }}
          >
            Contact
          </button>

          {/* Download Resume Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Download Resume" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/resume");
            }}
          >
            Download Resume
          </button>

          {/* Portfolio Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Portfolio" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/portfolio");
            }}
          >
            Portfolio
          </button>

          {/* Certifications Button */}
          <button
            className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Certifications" ? "highlighted" : ""}`}
            onClick={(e) => {
              highlightNav(e);
              handleClick("/certifications");
            }}
          >
            Certifications
          </button>

        </div>
      </nav>
    </BounceInDownHeader>
  );
}