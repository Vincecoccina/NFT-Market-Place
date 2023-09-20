"use client";

import { useState, useRef, useEffect } from "react";
import Banner from "@/components/Banner";
import CreatorCard from "@/components/UIElement/CreatorCard";
import { makeId } from "@/utils/makeId";
import Image from "next/image";
import images from "../assets";
import classes from "../styles/HomePage.module.css";

const Home = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [hideButton, setHideButton] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1000 ? 270 : 210;
    const start = current.scrollLeft;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      if (direction === "left") {
        current.scrollLeft = start - (progress / 300) * scrollAmount;
      } else {
        current.scrollLeft = start + (progress / 300) * scrollAmount;
      }

      if (progress < 300) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
    console.log("hello")
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);
    return () => {
      window.removeEventListener('resize', isScrollable);
    }

  });

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
            {!hideButton && (
              <>
                <div
                  onClick={() => handleScroll("left")}
                  className={classes.container_arrow_left}
                >
                  <Image src={images.left} width={40} height={40} />
                </div>
                <div
                  onClick={() => handleScroll("right")}
                  className={classes.container_arrow_right}
                >
                  <Image src={images.right} width={40} height={40} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
