import React from "react";
import styles from "./Portfolio.module.scss";
const data = require("../../utils/data.json");
const Portfolio = () => {
    return (
        <div className={`${styles.portfolio}`} id="portfolio">
            <p className="section-title">
                Latest <span>Projects</span>
            </p>
            <div className={`grid ${styles.cards} box-shadow box-shadow-md p-20 br-15`}>
                {data?.map((el) => {
                    return (
                        <div key={el} className="span-4 span-md-12">
                            <div className={`shadow-inset ${styles.card} br-15`}>
                                <div className="thumb  ">
                                    <div className="thumb__container">
                                        <img className="thumb__img br-15" src={el?.thumb} alt="" />
                                    </div>
                                </div>
                                <a
                                    href={el?.link}
                                    target="_blank"
                                    className={styles.cardLayer}
                                >
                                    <h2 className={styles.layerTitle}>{el?.name}</h2>
                                    <p className={styles.description}>{el?.description}</p>
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
