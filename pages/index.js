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
                I recently arrived to Canada from Ukraine. I am a hard worker,
                quick learner and adaptable to fast-paced environments. I have
                2+ years of experience working in a Polish tech company. As a
                result, I believe I would be an excellent addition to your team
                and would strive to provide my greatest skills and best effort
                to contribute additional success to your organisation.
              </p>
            </div>
            <div className={styles.socialBox}>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/maksym-kopych-4824a9237/"
              >
                <img src="linkedin.svg" alt="linkedin" />
              </a>
              <a
                className={styles.socialLink}
                href="https://github.com/MaksymKopych"
              >
                <img src="github.svg" alt="linkedin" />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/maksymkopych"
              >
                <img src="facebook.svg" alt="linkedin" />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/maximkopych/"
              >
                <img src="instagram.svg" alt="linkedin" />
              </a>
            </div>
            <div className="btn-box">
              <Link
                href="Maksym_Kopych_juniorFrontEnd.pdf"
                download
                className="btn"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
        <div className={`span-6 span-md-12 `}>
          <div className={`${styles.imageBox}`}>
            <img src="/hexagon.svg" alt="main" className={styles.hexagon} />
            <div className={styles.image}>
              <img src="/Photo.png" alt="main" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}