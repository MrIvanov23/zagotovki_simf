import { FC } from "react";

import styles from "./HomeBannerBlock.module.scss";

import { Link } from "react-router-dom";

import ButtonMain from "../../../UI/Buttons/ButtonMain/ButtonMain";

const HomeBannerBlock: FC = () => {
    return (
        <section className={styles.HomeBannerBlock}>
            <div className={styles.wrapper}></div>
            <div className={styles.title}>
                    <h2>100% Natural Food</h2>
                    <h3>Choose the best healthier way of life</h3>

                    <Link to='/shop'>
                        <ButtonMain buttonStyle="second">Explore Now</ButtonMain>
                    </Link>
                </div>
        </section>
    );
};

export default HomeBannerBlock;