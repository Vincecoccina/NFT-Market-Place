import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../../assets";

import classes from "../../styles/NFTCard.module.css";

const NFTCard = ({ nft }) => {
  return (
    <Link
      href={{ pathname: "/nft-details", query: { nft } }}
      className={classes.nft_link}
    >
      <div className={classes.containerCard}>
        <div className={classes.container_NFTImg}>
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            height={200}
            width={200}
            alt={`nft${nft.i}`}
          />
        </div>
        <div className={classes.container_NFTInfos}>
          <p className={classes.NFTName}>{nft.name}</p>
          <div className={classes.container_sellerPrice}>
            <p className={classes.NFTInfos}>{nft.price} ETH</p>
            <p className={classes.NFTInfos}>{nft.seller}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
