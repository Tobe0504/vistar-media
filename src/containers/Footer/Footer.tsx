import Instagram from "@/assets/svgIcons/Instagram";
import LinkedIn from "@/assets/svgIcons/LinkedIn";
import Twitter from "@/assets/svgIcons/Twitter";
import classes from "./Footer.module.css";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedIn from "../../assets/images/linkedIn.svg";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.topSection}>
        <div>
          <h4>Our Address</h4>
          <p>
            Lorem ipsum dolor sit amet, ipsum
            <br /> Africa, Earth
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <a>hello@vmdia.co</a>
          <a>info@vmdia.co</a>
          <a>+234(0)703829483</a>
        </div>

        <div>
          <button>Back to top</button>
          <div>
            <p>Follow us</p>
            <Image src={instagram} alt="Instagram" />
            <Image src={twitter} alt="Twitter" />
            <Image src={linkedIn} alt="LinkedIn" />
          </div>
        </div>
      </div>

      <div className={classes.bottomSection}>
        <p>
          Designed by <span>Supremos</span> © 2024 All Rights Reserved
        </p>
        <Link href="#0">Terms and Condition</Link>
        <Link href="#0">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
