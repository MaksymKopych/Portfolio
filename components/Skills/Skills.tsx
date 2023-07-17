import React from 'react';
import styles from "./Skills.module.scss"

type Props = {}

const Skills = (props: Props) => {
    const skills = [{
        id: 1,
        name: "HTML / HTML5 & CSS",
        range: "90"
    },
    {
        id: 2,
        name: "SASS/LESS",
        range: "90"
    }, {
        id: 3,
        name: "Git",
        range: "70"
    }, {
        id: 4,
        name: "Axios / Query / Fetch",
        range: "75"
    }, {
        id: 1,
        name: "NPM / YARN / GULP",
        range: "75"
    },
    ]
    return (
        <div className={`mb-4`} id="skills">
            <p class="section-title">Main <span>Skills</span></p>
            <div className={`${styles.scillsBox} grid`}>
                <div className={`${styles.skills} span-6 span-md-12`}>
                    <div className={`${styles.each}`}>
                        <div className={`${styles.box}  ${styles.next} `}>
                            <h2>NEXT.JS</h2>
                            <img className={styles.icon} src="/nx.svg" alt="next-icon" />
                        </div>
                    </div>
                    <div className={`${styles.each} ${styles.css}`}>
                        <div className={`${styles.box}  ${styles.react} `}>
                            <h2>React.JS</h2>
                            <img className={styles.icon} src="/ra.svg" alt="react-icon" />
                        </div>
                    </div>
                    <div className={styles.center}>
                        <div className={`${styles.box} `}>
                            <h2>SKILLS</h2>
                        </div>
                    </div>
                    <div className={`${styles.each} ${styles.js}`}>
                        <div className={`${styles.box}  ${styles.js}`}>
                            <img className={styles.icon} src="/js.svg" alt="js-icon" />
                            <h2>JavaScript</h2>
                        </div>
                    </div>
                    <div className={`${styles.each} ${styles.ng}`}>
                        <div className={`${styles.box}  ${styles.ts}`}>

                            <img className={styles.icon} src="/ts.svg" alt="ts-icon" />
                            <h2>TypeScript</h2>

                        </div>
                    </div>
                </div>

                <div className={`span-6 span-md-12 ${styles.allSkills}`}>
                    <div className={styles.centerSkills}>
                        <section className={styles.skillsChart} >
                            {skills.map(s => {
                                return <div key={s.id} className={`skill`}>
                                    <h3 className={`skill__type`}

                                    >{s.name}</h3>
                                    <div class={`skill__outerBar`}>
                                        <div className={`skill__innerBar skill__innerBar--${s.range}`}></div>
                                    </div>
                                </div>
                            })}

                        </section>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Skills