import { FC } from "react";

import styles from "../Header.module.scss";

import { IconsLogoOrganic } from "../../_Icons/Icons";

const HeaderLogo: FC = () => {
    return (
        <div className={styles.headerLogo}>
            <span className={styles.logoImage}></span>
            <span className={styles.logoName}></span>
        </div>
    );
};

export default HeaderLogo;