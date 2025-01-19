import DoubleArrowLeft from "@/assets/svgIcons/DoubleArrowLeft";
import DoubleArrowRight from "@/assets/svgIcons/DoubleArrowRight";
import BlogCard from "@/components/BlogCard/BlogCard";
import { homeBlogs } from "@/utilities/heroImages";
import classes from "./HomeBlogs.module.css";

const HomeBlogs = () => {
  return (
    <section className={classes.container}>
      <h4>BLOG</h4>

      <div className={classes.blogsContainer}>
        {homeBlogs.map((data) => {
          return <BlogCard key={data?.title} data={data} />;
        })}
      </div>

      <div className={classes.nav}>
        <div>
          <DoubleArrowLeft />
          <span>Prev articles</span>
        </div>

        <div>
          <span>Next articles</span>
          <DoubleArrowRight />
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
