import { FC } from "react";

import styles from "./AboutUsBlock.module.scss";

import aboutUsBlockBG from "../../../../assets/images/background-image/AboutUsBlockBG.jpg"

import { IconsFactory, IconsTraktor } from "../../../_Icons/aboutUsIcons";

const AboutUsBlock: FC = () => {
    return (
        <section className={styles.aboutUsBlock}>
            <img src={aboutUsBlockBG} alt="About Us BG" />

            <div className={styles.wrapper}>
                <h2>About Us</h2>
                <h3>We do Creative<br /> Things for Success</h3>

                <div className={styles.description}>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>

                <div className={styles.points}>
                    <div>
                        <IconsTraktor />
                        <span>Modern Agriculture Equipment</span>
                    </div>
                    <div>
                        <IconsFactory />
                        <span>No growth<br /> hormones are used</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsBlock;