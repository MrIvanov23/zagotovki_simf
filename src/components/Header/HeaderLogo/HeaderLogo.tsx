import { FC } from "react";

import styles from "../Header.module.scss";

import { IconsLogoOrganic } from "../../_Icons/Icons";

const HeaderLogo: FC = () => {
    return (
        <div className={styles.headerLogo}>
            <IconsLogoOrganic />

            <span className={styles.logoName}>Organic</span>
        </div>
    );
};

export default HeaderLogo;