import { FC } from "react";

import styles from "./LicencesPage.module.scss";

import { IconsLicencesBG } from "../../../components/_Icons/utilityIcons";

const LicencesPage: FC = () => {
    return (
        <main className={styles.licence}>
            <div className={styles.logo}>
                <div className={styles.logoSVG}>
                    <IconsLicencesBG />
                </div>

                <h2>Licences</h2>
            </div>

            <div className={styles.description}>
                <div className={styles.descriptionWrapper}>
                    <h3>Icon & Graphics</h3>

                    <div>
                        <p>Icons and Graphics are manually designed by the VictorFlow Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.</p>
                        <p>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
                    </div>
                </div>

                <div className={styles.descriptionWrapper}>
                    <h3>Photography</h3>

                    <div>
                        <p>All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.</p>  
                    </div>
                </div>

                <div className={styles.descriptionWrapper}>
                    <h3>Font</h3>

                    <div>
                        <p>Organick template uses free licensed Google Fonts. Please check Roboto, Yellowtail and Open Sans.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LicencesPage;