import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import style from "./Header.module.scss"

type Props = {}

export default function Header({ }: Props) {
    const router = useRouter()
    const [darkTheme, setDarkTheme] = useState(undefined);
    useEffect(() => {
        if (darkTheme !== undefined) {
            if (darkTheme) {
                // Set value of  darkmode to dark
                document.documentElement.setAttribute("data-theme", "dark");
                window.localStorage.setItem("theme", "dark");
            } else {
                // Set value of  darkmode to light
                document.documentElement.removeAttribute("data-theme");
                window.localStorage.setItem("theme", "light");
            }
        }
    }, [darkTheme]);
    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        );
        // Set initial darkmode to light
        setDarkTheme(initialColorValue === "dark");
    }, []);
    const handleToggle = (event) => {
        setDarkTheme(event.target.checked);
    };
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className={`container ${style.header}`}>
            <Link className={style.logo__link} href="/">Kopych</Link>
            <nav className={`${style.nav}`}>
                <ul className={style.nav__list}>
                    <li >
                        <Link className={`${style.nav__link}`} href="/">Home</Link>
                    </li>

                    <li >
                        <Link className={`${style.nav__link} `} href="#portfolio">Portfolio</Link>
                    </li>

                    <li >
                        <Link className={`${style.nav__link}`} href="#skills">Skills</Link>
                    </li>
                    <li >
                        <a className={`btn`} href="#contact">Contact</a>
                    </li>
                    {/* <li className={style.nav__languages} >
                        <Link className={`${style.nav__link} `} href={router.pathname} locale={'ua'} style={{
                            fontWeight: router.locale === 'en' ? 400 : 700,
                        }}>

                            UA
                        </Link>
                        /
                        <Link className={`${style.nav__link} `} href={router.pathname} locale={'en'} style={{
                            fontWeight: router.locale === 'ua' ? 400 : 700,
                        }}>

                            EN
                        </Link>
                    </li> */}

                    {/* {darkTheme !== undefined && (
                        <label className={style.navigationSwitch}>
                            <input
                                className={style.switchInput}
                                type="checkbox"
                                checked={darkTheme}
                                onChange={handleToggle}
                            />
                            <span className={style.switchSlider}></span>
                            <span className={style.light}>
                                <img className={style.lightIcon} src="/light-mode.svg" alt="light" />
                            </span>
                            <span className={style.dark}>
                                <img className={style.darkIcon} src="/dark-mode.svg" alt="dark" />
                            </span>
                        </label>
                    )} */}

                </ul>
            </nav>
            <nav className={`${style.nav_mobile} ${showMenu ? style.show : null}`}>
                <div
                    className={style.burger}
                    onClick={() => {
                        setShowMenu((prev) => (prev ? false : true));
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={style.mobile__list}>
                    <Link className={` ${style.mobile__link}`} onClick={() => setShowMenu(false)} href="/">Home</Link>
                    <Link className={` ${style.mobile__link} `} onClick={() => setShowMenu(false)} href="#portfolio">Portfolio</Link>
                    <Link className={` ${style.mobile__link} `} onClick={() => setShowMenu(false)} href="#skills">Skills</Link>
                    <Link className={`${style.mobile__link}`} onClick={() => setShowMenu(false)} href="#contact">Contact</Link>

                </div>
            </nav>
        </header>
    )
}