import Image from "next/image";
import classes from "./HomeHero.module.css";
import herotextImage from "../../assets/images/herotextButton.svg";

const HomeHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h4>
          Digital Innovation in <br /> <span>Out-of-Home</span> Advertising
        </h4>
        <p>
          Connect with audiences wherever they are through data-driven,
          impactful OOH campaigns.
        </p>
      </div>

      <Image src={herotextImage} alt="Get Started" />
    </section>
  );
};

export default HomeHero;
