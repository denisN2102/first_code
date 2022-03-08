import React from "react";
import classes from "./News.module.css";

function News(props) {
  return (
    <div className={classes.content}>
      <div className={classes.dialog}>News</div>
    </div>
  );
}

export default News;
