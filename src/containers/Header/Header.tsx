"use client";

import Image from "next/image";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  // Utils
  const headerRoutes = [
    {
      title: "About",
      action: () => {},
      id: "#about",
    },
    {
      title: "Services",
      action: () => {},
      id: "#services",
    },
    {
      title: "Portfolio",
      action: () => {},
      id: "#portfolio",
    },
    {
      title: "Blog",
      action: () => {},
      id: "#blog",
    },
    {
      title: "Contact",
      action: () => {},
      id: "#contact-us",
    },
  ];

  // Router
  const router = useRouter();

  return (
    <header className={classes.container}>
      <Link href="/">
        <Image src={logo} alt="Vistar Logo " />
      </Link>

      {/* nav section */}
      <ul>
        {headerRoutes?.map((route) => {
          return (
            <li key={route?.title}>
              <Link href={route?.id}>{route?.title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
