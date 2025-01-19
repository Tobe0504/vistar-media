import { homePortfolios } from "@/utilities/heroImages";
import Image from "next/image";
import classes from "./HomePortfolio.module.css";

const HomePortfolio = () => {
  return (
    <section className={classes.container}>
      <h4>PORTFOLIO AND CLIENTS</h4>

      <div className={classes.portfolioContainer}>
        {homePortfolios.map((data, i) => {
          return (
            <div>
              <Image src={data?.image} key={i} alt="Portfolio" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePortfolio;
