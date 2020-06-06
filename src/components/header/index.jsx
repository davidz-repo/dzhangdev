import React from "react";

import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="David Zhang"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>David Zhang</h1>
        <h2>Software Engineer based in California, US.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
