import ArrowRight from "@/assets/svgIcons/ArrowRight";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import classes from "./HomeContactUs.module.css";

const HomeContactUs = () => {
  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <button>
          <span>Get direction</span>
          <ArrowRight />
        </button>

        <h4>Contact us</h4>
        <p>
          Kindly contact us; we would be delighted to engage in a collaborative
          business partnership.
        </p>
      </div>

      <form>
        <Input label="Name" />
        <Input label="E-mail" />
        <Input label="Phone" />
        <Input label="Message" />
        <Button>SEND</Button>
      </form>
    </section>
  );
};

export default HomeContactUs;
