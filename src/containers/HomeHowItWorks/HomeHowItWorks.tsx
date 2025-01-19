import { howItWorks } from "@/utilities/heroImages";
import classes from "./HomeHowItWorks.module.css";

const HomeHowItWorks = () => {
  return (
    <section className={classes.container}>
      <h4>HOW IT WORKS</h4>

      <div className={classes.textSection}>
        {howItWorks?.map((data) => {
          return (
            <div>
              <h1>{data?.title}</h1>
              {data?.isActive && <p>{data?.caption}</p>}
              <span>
                <span>.</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHowItWorks;
