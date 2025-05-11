import { FC } from "react";

import styles from "./Footer.module.scss";

import { dataFooterNav } from "../../assets/data/data";

import { Link } from "react-router-dom";

import HeaderLogo from "../Header/HeaderLogo/HeaderLogo";
import { IconsFacebock, IconsInstagram, IconsPinterest, IconsTwitter } from "../_Icons/Icons";

const Footer: FC = () => {
    const footerNav = dataFooterNav;

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContact}>
                <h2 className={styles.footerH2}>Contact Us</h2>

                <div>
                    <h3>Email</h3>
                    <a href="mailto: needhelp@Organia.com" target="_blank" rel="noreferrer">needhelp@Organia.com</a>
                </div>
                <div>
                    <h3>Phone</h3>
                    <a href="tel:666888888" target="_blank" rel="noreferrer">666 888 888</a>
                </div>
                <div>
                    <h3>Address</h3>
                    <a
                        href="https://www.google.com/maps/place/88+Allen+St,+New+York,+NY+10002,+%D0%A1%D0%A8%D0%90/@40.7178712,-73.9902102,15.86z/data=!4m6!3m5!1s0x89c2598714f8abf1:0xb04440ee7511df09!8m2!3d40.7180685!4d-73.990611!16s%2Fg%2F11b8v4_88l?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        88 Allen St, New York, USA
                    </a>
                </div>
            </div>
            <div className={styles.footerLogo}>
                <HeaderLogo />

                <p>Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing</p>
                
                <div className={styles.wrapper}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><IconsInstagram /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><IconsFacebock /></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><IconsTwitter /></a>
                    <a href="https://ru.pinterest.com/" target="_blank" rel="noreferrer"><IconsPinterest /></a>
                </div>
            </div>
            <div className={styles.footerUtility}>
                <h2 className={styles.footerH2}>Utility Pages</h2>
                
                { footerNav.map((link) => <Link key={link.name} to={link.pathname}>{link.name}</Link>)}
            </div>
        </footer>
    );
};

export default Footer;