import React, { useState } from "react";
import { useRouter } from "next/router";
import { BounceInDownHeader } from "../utils/Animations";
import Dropdown from "react-bootstrap/Dropdown";

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
            About
          </Dropdown.Toggle>

          <Dropdown.Menu id="custom-menu">

            <Dropdown.Item>
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
        {/* Portfolio Button */}
        <Dropdown>
          <Dropdown.Toggle id="custom-dropdown" className="hvr-wobble-horizontal">
            How Can I Help?
          </Dropdown.Toggle>
          <Dropdown.Menu id="custom-menu">
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

        {/* More Dropdown */}
        <Dropdown>
          <Dropdown.Toggle id="custom-dropdown" className="hvr-wobble-horizontal">
            Resume
          </Dropdown.Toggle>

          <Dropdown.Menu id="custom-menu">
            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${highlightedButton === "Resume" ? "highlighted" : ""
                  }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick("/resume");
                }}
              >
                Download
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </BounceInDownHeader>
  );
}