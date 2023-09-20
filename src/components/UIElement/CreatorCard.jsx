import React from "react";
import Image from "next/image";
import images from "../../assets";
import classes from "../../styles/CreatorCard.module.css";

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEth }) => {
  return (
    <div className={classes.container_card}>
      <div className={classes.container_rank}>
        <p>{rank}</p>
      </div>
      <div className={classes.container_ItemImage}>
        <div className={classes.container_image}>
          <Image src={creatorImage} width={100} height={100} alt={creatorName} />
          <div className={classes.container_tick}>
            <Image src={images.tick} height={20} width={20} />
          </div>
        </div>
      </div>
      <div className={classes.container_infosCreator}>
        <p>{creatorName}</p>
        <p>{creatorEth.toFixed(2)} <span className={classes.currency}>ETH</span></p>
      </div>
    </div>
  );
};

export default CreatorCard;
