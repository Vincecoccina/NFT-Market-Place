import React from "react";
import Image from "next/image";
import Button from "./UIElement/Button";
import logo from "../assets/logo.png";
import classes from "../styles/Footer.module.css";

const FooterLinks = ({ heading, items }) => {
  return (
    <div>
      <h3 className={classes.linksTitleFooter}>{heading}</h3>
      {items.map((item, index) => {
        return <p className={classes.linksFooter}>{item}</p>;
      })}
    </div>
  );
};
const Footer = () => {
  return (
    <footer className={classes.container_footer}>
      <div className={classes.containerText_footer}>
        <div className={classes.containerItems_footer}>
          <div className={classes.containerLogo_footer}>
            <Image
              src={logo}
              width={25}
              height={25}
              objectFit="contain"
              alt="logo"
            />
            <p>NFT Market Place</p>
          </div>
          <p className={classes.itemsText_footer}>Get The Latest Updates</p>
          <div className={classes.searchBar_footer}>
            <input type="email" placeholder="Email" />
            <Button>Envoyer</Button>
          </div>
        </div>
        <div className={classes.container_linkFooter}>
          <FooterLinks
            heading="NFT Market Place"
            items={["Explore", "How it Works", "Contact Us"]}
          />
          <FooterLinks
            heading="Support"
            items={["Help Center", "Terms Of Services", "Legal", "Privacy Policy"]}
          />
        </div>
      </div>

      <div className={classes.containerItem_footer}>
        <div className={classes.allRight_footer}>
          <p className={classes.allRight_footer_text}>
            NFT Market Place, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
