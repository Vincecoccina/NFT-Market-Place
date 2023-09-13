import classes from "../styles/HomePage.module.css";
import Banner from "@/components/Banner";

const Home = () => {
  return (
    <div className={classes.container_homepage}>
      <div className={classes.containerBanner_homepage}>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
