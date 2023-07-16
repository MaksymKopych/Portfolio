import React from 'react'
import styles from "./Footer.module.scss"
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className={styles.footer}>
            <p className={styles.footerLink}>Created by <a className={styles.footerLink} href="/">Malsym Kopych</a> 2023</p>
        </div>
    )
}

export default Footer