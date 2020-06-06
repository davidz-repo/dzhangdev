import React from "react";

import classes from "./socials.module.css";

const Socials = () => {
  return (
    <div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a className={classes.link} href="https://www.linkedin.com/in/dzhangdev/">
          <img src="https://img.icons8.com/material-sharp/32/000000/pdf-2.png"/>
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="https://github.com/dzhangdev">
          <img src="https://img.icons8.com/material-rounded/32/000000/github.png"/>
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="https://www.linkedin.com/in/dzhangdev/">
          <img src="https://img.icons8.com/windows/32/000000/linkedin.png"/>
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="https://www.linkedin.com/in/dzhangdev/">
          <img src="https://img.icons8.com/ios/32/000000/camera.png"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
