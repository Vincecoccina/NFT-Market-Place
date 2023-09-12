"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./UIElement/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

import classes from "../styles/Navbar.module.css";

const MenuItems = ({ active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "/created-nfts";
      case 2:
        return "/my-nfts"     
      default:
        return "/";
    }
  };

  return (
    <ul className={classes.ItemGroup_Navbar}>
      {["Explore NFTs", "Listed NFTs", "My NFTs"].map((item, i) => {
        return (
          <li key={i} onClick={() => {setActive(item)}}>
            <Link
              href={generateLink(i)}
              className={
                active === item ? classes.activeLink : classes.inactiveLink
              }
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("Explore NFTs");

  return (
    <nav className={classes.containerNavbar}>
      <div className={classes.containerItem_Navbar}>
        <Link href="/">
          <div className={classes.containerLogo_Navbar}>
            <Image src={logo} width={40} height={40} objectFit="contain" />
            <p>NFT Market Place</p>
          </div>
        </Link>
      </div>

      <div className={classes.containerMenuItem_Navbar}>
        <MenuItems active={active} setActive={setActive} />
        <div className={classes.containerBtn_Navbar}>
          <Button>Create NFT</Button>
          <Button invert>Connect</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
