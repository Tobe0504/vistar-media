import { homeServices } from "@/utilities/heroImages";
import Image from "next/image";
import classes from "./HomeServices.module.css";

const HomeServices = () => {
  return (
    <section className={classes.container} id="services">
      <div className={classes.header}>
        <h3>SERVICES</h3>
        <p>Effortless Campaign Management</p>
      </div>

      <div className={classes.servicesection}>
        {homeServices?.map((data, i) => {
          return (
            <div key={data?.title}>
              <Image src={data?.image} alt={data?.title} />
              <h4>{data?.title}</h4>
              <p>{data?.caption}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeServices;
