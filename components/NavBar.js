import React, { useState } from "react";
import { useRouter } from "next/router";
import { BounceInDownHeader } from "../utils/Animations";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export function NavBar(props) {
  const router = useRouter();
  const [highlightedButton, setHighlightedButton] = useState(null);

  const highlightNav = (e) => {
    setHighlightedButton(e.target.innerText);
  };

  const handleClick = (navigateTo) => {
    router.push(navigateTo);
  };

  return (
    <BounceInDownHeader className="header-bg">
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
            About Me
          </Dropdown.Toggle>

          <Dropdown.Menu id="custom-menu">

            <DropdownItem>
            <button
          className={`nav-font hvr-wobble-horizontal ${highlightedButton === "About Me" ? "highlighted" : ""
            }`}
          onClick={(e) => {
            highlightNav(e);
            handleClick("/about_me");
          }}
        >
          Biography
        </button>
            </DropdownItem>

          </Dropdown.Menu>
        </Dropdown>
        {/* Portfolio Button */}
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
        {/* Services Button */}
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
        {/* More Dropdown */}
        <Dropdown>
          <Dropdown.Toggle id="custom-dropdown" className="hvr-wobble-horizontal">
            More
          </Dropdown.Toggle>

          <Dropdown.Menu id="custom-menu">
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

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Contact Form" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/contact");
                }}
              >
                Contact Me
              </button>
            </Dropdown.Item>

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Resume" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/resume");
                }}
              >
                Resume
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </BounceInDownHeader>
  );
}