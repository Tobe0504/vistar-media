"use client";

import Image from "next/image";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  // Utils
  const headerRoutes = [
    {
      title: "About",
      action: () => {},
    },
    {
      title: "Services",
      action: () => {},
    },
    {
      title: "Portfolio",
      action: () => {},
    },
    {
      title: "Blog",
      action: () => {},
    },
    {
      title: "Contact",
      action: () => {},
    },
  ];

  return (
    <header className={classes.container}>
      <Image src={logo} alt="Vistar Logo " />

      {/* nav section */}
      <ul>
        {headerRoutes?.map((route) => {
          return (
            <li onClick={() => route?.action()} key={route?.title}>
              {route?.title}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
