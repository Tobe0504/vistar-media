import AppLayout from "@/layouts/AppLayout/AppLayout";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import HomeContactUs from "../HomeContactUs/HomeContactUs";
import HomeHero from "../HomeHero/HomeHero";
import HomeHowItWorks from "../HomeHowItWorks/HomeHowItWorks";
import HomeImagesSection from "../HomeImagesSection/HomeImagesSection";
import HomePortfolio from "../HomePortfolio/HomePortfolio";
import HomeServices from "../HomeServices/HomeServices";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <AppLayout className={classes.container}>
      <HomeHero />
      <HomeImagesSection />
      <HomeAbout />
      <HomeServices />
      <HomeHowItWorks />
      <HomePortfolio />
      <HomeBlogs />
      <HomeContactUs />
    </AppLayout>
  );
};

export default Home;
