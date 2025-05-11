import { FC } from "react";

import styles from "./ChangelogPage.module.scss";

import { IconsChangelogBG } from "../../../components/_Icons/utilityIcons";

import changelogIcon from "../../../assets/images/icons/changelogIcon.jpg";


const ChangelogPage: FC = () => {
    return(
        <main className={styles.changelog}>
            <div className={styles.logo}>
                <div className={styles.logoSVG}>
                    <IconsChangelogBG />
                </div>

                <h2>Changelog</h2>
            </div>

            <div className={styles.version}>
                <img src={changelogIcon} alt="changelogIcon" />

                <h3>V.1</h3>

                <span>Initial Organick Webflow Template Release</span>
            </div>
        </main>
    );
};

export default ChangelogPage;