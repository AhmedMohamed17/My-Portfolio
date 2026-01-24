import { useState } from "react";
import "../dist/styles.css";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <React.Fragment>
      <nav>
        <h3 onClick={pageUp} className="logo">
          Ahmed.dev
        </h3>
        <ul>
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li onClick={() => hamburgerMenu()}>
            <IconMenu2 className="mobile-menu" width={30} height={30} />
          </li>
        </ul>
      </nav>

      {/* mobile nav*/}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <IconX width={30} height={30} />
        </span>

        <ul>
          <li style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <ThemeToggle />
          </li>
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
