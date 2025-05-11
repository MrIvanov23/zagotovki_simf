import { FC, useEffect } from "react";

import styles from "./Header.module.scss"

import { useLocation } from "react-router-dom";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart/HeaderCart";

const Header: FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.wrapper}>
                    <HeaderLogo />
                    <HeaderNav />
                </div>
                <div className={styles.wrapper}>
                    <HeaderSearch />
                    <HeaderCart />
                </div>
            </div>
        </header>
    );
};

export default Header;