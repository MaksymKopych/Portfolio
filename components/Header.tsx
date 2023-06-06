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
            <div className={style.logo}>
                <Link className={style.logo__link} href="/">Portfolio</Link>
            </div>
            <nav className={`${style.nav}`}>
                <ul className={style.nav__list}>
                    <li >
                        <Link className={`${style.nav__link} ${router.pathname === "/" && style.active}`} href="/">Home</Link>
                    </li>
                    {/* <li >
                        <Link className={`${style.nav__link} ${router.pathname === "/about" && style.active}`} href="/about">About</Link>
                    </li> */}
                    <li >
                        <Link className={`${style.nav__link} ${router.pathname === "/portfolio" && style.active}`} href="/portfolio">Portfolio</Link>
                    </li>
                    <li >
                        <Link className={`${style.nav__link} ${router.pathname === "/contact" && style.active}`} href="/contact">Contact</Link>
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
                    {/* <li>
                        {darkTheme !== undefined && (
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
                        )}
                    </li> */}
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
                <div className={style.nav__list}>
                    <Link className={`${style.nav__link} ${router.pathname === "/" && style.active}`} onClick={() => setShowMenu(false)} href="/">Home</Link>
                    {/* <Link className={`${style.nav__link} ${router.pathname === "/about" && style.active}`} onClick={() => setShowMenu(false)} href="/about">About</Link> */}
                    <Link className={`${style.nav__link} ${router.pathname === "/portfolio" && style.active}`} onClick={() => setShowMenu(false)} href="/portfolio">Portfolio</Link>
                    <Link className={`${style.nav__link} ${router.pathname === "/contact" && style.active}`} onClick={() => setShowMenu(false)} href="/contact">Contact</Link>
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
                    {/* <li>
                        {darkTheme !== undefined && (
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
                        )}
                    </li> */}
                </div>
            </nav>
        </header>
    )
}