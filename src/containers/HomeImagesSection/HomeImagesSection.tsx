"use client";

import { activeToggler } from "@/helpers/activeTogglers";
import { carouselImages } from "@/utilities/heroImages";
import Image from "next/image";
import { useState } from "react";
import classes from "./HomeImagesSection.module.css";

const HomeImagesSection = () => {
  // States
  const [imagesState, setImagesState] = useState(
    carouselImages.map((data, i) => {
      if (i === 0) {
        return { image: data, isActive: true };
      } else {
        return { image: data, isActive: false };
      }
    })
  );

  return (
    <section className={classes.outerContainer}>
      <div className={classes.carousel}>
        {imagesState.map((data, i) => {
          return (
            <div
              key={i}
              className={
                data?.isActive
                  ? classes.activeCarousel
                  : classes.inActiveCarousel
              }
              onClick={() => activeToggler(i, imagesState, setImagesState)}
            ></div>
          );
        })}
      </div>
      <div className={classes.container}>
        <p>SCROLL DOWN</p>
        <div>
          {imagesState?.map((data, i) => {
            return (
              <div
                className={`${classes.imagesSection} ${
                  data?.isActive ? classes.active : classes?.inActive
                }`}
                onClick={() => activeToggler(i, imagesState, setImagesState)}
              >
                <Image src={data?.image} key={i} alt="Product" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeImagesSection;
