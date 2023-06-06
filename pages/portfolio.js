import React from "react";
import styles from "./Portfolio.module.scss";
const data = require("../utils/data.json");
const Portfolio = () => {
  return (
    <div className={`container section ${styles.portfolio}`}>
      <h1 className={styles.header}>
        Latest <span>Projects</span>
      </h1>
      <div className="grid section">
        {data?.map((el) => {
          return (
            <div key={el} className="span-4 span-md-6 span-sm-12">
              <div className={styles.portfolioBox}>
                <div className="thumb">
                  <div className="thumb__container">
                    <img className="thumb__img" src={el?.thumb} alt="" />
                  </div>
                </div>
                <a
                  href={el?.link}
                  target="_blank"
                  className={styles.portfolioLayers}
                >
                  <h2 className={styles.title}>{el?.name}</h2>
                  <p className={styles.description}>{el?.description}</p>
                  <h3>Open project</h3>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
