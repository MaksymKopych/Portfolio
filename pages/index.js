import Link from "next/link";
import styles from "./Index.module.scss";
export default function Home() {
  return (
    <section className={`section container ${styles.main}`}>
      <div className="grid section">
        <div className={`span-6 span-md-12 ${styles.order}`}>
          <div className={styles.content}>
            <div>
              <h1 className={styles.header}>
                Hello, It's Me <br></br>
                <span>Maksym Kopych</span>
              </h1>
              <div className={styles.subtitle}>
                <h2>And I am a</h2>
                <h3 className={styles.animate}>Front-End Developer</h3>
              </div>
              <p>
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
            <div className={styles.socialBox}>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/maksymkopych/"
              >
                <img
                  src="https://maksymkopych.github.io/Portfolio/linkedin.svg"
                  alt="linkedin"
                />
              </a>
              <a
                className={styles.socialLink}
                href="https://github.com/MaksymKopych"
              >
                <img
                  src="https://maksymkopych.github.io/Portfolio/github.svg"
                  alt="linkedin"
                />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/maksymkopych"
              >
                <img
                  src="https://maksymkopych.github.io/Portfolio/facebook.svg"
                  alt="linkedin"
                />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/maksym_kopych/"
              >
                <img
                  src="https://maksymkopych.github.io/Portfolio/instagram.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="btn-box">
              <a
                href="https://maksymkopych.github.io/Portfolio/MaksymKopych_FrontEndDev.pdf"
                download
                className="btn"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className={`span-6 span-md-12 `}>
          <div className={`${styles.imageBox}`}>
            <img
              src="https://maksymkopych.github.io/Portfolio/hexagon.svg"
              alt="main"
              className={styles.hexagon}
            />
            <div className={styles.image}>
              <img
                src="https://maksymkopych.github.io/Portfolio/Photo.png"
                alt="main"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
