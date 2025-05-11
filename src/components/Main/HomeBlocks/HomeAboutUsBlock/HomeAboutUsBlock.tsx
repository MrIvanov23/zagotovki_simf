import { FC } from "react";

import styles from "./HomeAboutUsBlock.module.scss";

import homeAboutUsBlockBG from "../../../../assets/images/background-image/HomeAboutUsBlockBG.png";

import { Link } from "react-router-dom";

import ButtonMain from "../../../UI/Buttons/ButtonMain/ButtonMain";
import { IconsHomeCup, IconsHomeMail } from "../../../_Icons/homeIcons";

const HomeAboutUsBlock: FC = () => {
    return (
        <section className={styles.homeAboutUsBlock}>
            <img src={homeAboutUsBlockBG} alt='Fruit' />

            <div className={styles.wrapper}>
                <h2>About Us</h2>
                <h3>We Believe in Working Accredited Farmers</h3>
                
                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                
                <div className={styles.wrapperInfo}>
                    <div className={styles.info}>
                        <div className={styles.infoIcon}>
                            <IconsHomeCup />
                        </div>

                        <div className={styles.infoTitle}>
                            <h4>Organic Foods Only</h4>

                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.infoIcon}>
                            <IconsHomeMail />
                        </div>

                        <div className={styles.infoTitle}>
                            <h4>Quality Standards</h4>

                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                </div>

                <Link to='/shop'>
                    <ButtonMain buttonStyle="main" >Shop Now</ButtonMain>
                </Link>
            </div>
        </section>
    );
};

export default HomeAboutUsBlock;