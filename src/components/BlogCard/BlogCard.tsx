import ArrowRight from "@/assets/svgIcons/ArrowRight";
import { blogItemType } from "@/utilities/types";
import Link from "next/link";
import classes from "./BlogCard.module.css";

type BlogCardTypes = {
  data: blogItemType;
};

const BlogCard = ({ data }: BlogCardTypes) => {
  return (
    <Link href="#0" className={classes.container}>
      <h4>{data?.title}</h4>
      <p>{data?.text}</p>
      <div className={classes.dateSection}>
        <span>Dec 1 2024</span>

        <div>
          <span>Read more</span>
          <ArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
