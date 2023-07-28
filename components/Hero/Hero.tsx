import React from 'react'
import styles from "./Hero.module.scss"
type Props = {}

const Hero = (props: Props) => {
    return (
        <div className={`${styles.main} mb-4 `}>
            <div className="grid container">
                <div className={`span-6 span-md-12 ${styles.order}`}>
                    <div className={styles.content}>
                        <div>
                            <h1 className={styles.title}>
                                Hello, It's Me <br></br>
                                <span>Maksym Kopych</span>
                            </h1>
                            <div className={styles.subtitle}>
                                <h2>And I am a</h2>
                                <h3 className={styles.animate}>Front-End Developer</h3>
                            </div>
                            <p className={styles.description}>
                                I have a wide range of front-end development skills, including
                                experience with JavaScript/TypeScript, React, and Next.js. My
                                strong technical skills are complemented by excellent customer
                                support capabilities.<br></br>
                                <br></br>As a result, I believe I would be an excellent addition
                                to your team and would strive to provide my greatest skills and
                                best effort to contribute additional success to your
                                organisation.
                            </p>
                        </div>
                        <div className="btn-box">
                            <a
                                href="/MaksymKopych_FrontEndDev.pdf"
                                download
                                className="btn"
                            >
                                CV
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`span-6 span-md-12`}>
                    <div className={`${styles.imageBox} box-shadow box-shadow-md br-15`}>
                        <div className={styles.image}>
                            <img
                                src="/Photo.png"
                                alt="main"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero