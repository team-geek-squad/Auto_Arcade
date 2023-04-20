import React from "react";

import classes from "./HomePageSectionTitle.module.css";

const HomePageSectionTitle = ({ title }) => {
  return <h3 className={classes.title}>{title}</h3>;
};

export default HomePageSectionTitle;
