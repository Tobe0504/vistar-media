import classes from "./HomeAbout.module.css";
import decoration1 from "../../assets/images/decoration1.svg";
import decoration2 from "../../assets/images/decoration2.svg";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <section className={classes.container} id="about">
      <div>
        <h4>ABOUT</h4>
        <p>Out-of-Home Advertising That Delivers Results</p>
      </div>
      <h2>
        Vistar Media connects your brand with consumers using smart targeting
        and digital screens.
      </h2>

      <Image src={decoration1} alt="Decoration" />
      <Image src={decoration2} alt="Decoration" />
    </section>
  );
};

export default HomeAbout;
