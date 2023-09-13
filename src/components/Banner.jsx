import React from 'react';
import classes from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.containerBanner}>
        <p className={classes.banner_title}>Discover, collect and sell extrodinary NFTs</p>
        <div className={classes.bubble_1} />
        <div className={classes.bubble_2} />
    </div>
  )
}

export default Banner