"use client";
import { useState, useRef, useEffect } from "react";
import Banner from "@/components/Banner";
import CreatorCard from "@/components/UIElement/CreatorCard";
import { makeId } from "@/utils/makeId";
import images from "../assets";
import classes from "../styles/HomePage.module.css";

const Home = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <div className={classes.container_homepage}>
      <div className={classes.items_homepage}>
        <Banner />
        <div className={classes.container_part}>
          <h1 className={classes.title_part}>Top Sellers</h1>
          <div className={classes.container_carrousel} ref={parentRef}>
            <div className={classes.container_itemsCarrousel} ref={scrollRef}>
              {[4, 6, 7, 8, 9, 10].map((i) => {
                return (
                  <CreatorCard
                    key={`creator-${i}`}
                    rank={i}
                    creatorImage={images[`creator${i}`]}
                    creatorName={`0x${makeId(3)}...${makeId(4)}`}
                    creatorEth={10 - i * 0.5}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
