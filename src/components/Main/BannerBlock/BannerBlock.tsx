import { FC } from "react";

import styles from "./BannerBlock.module.scss";

interface IBannerBlock {
    title: string
};

const BannerBlock: FC<IBannerBlock> = ({ title }) => {
    const getClassName = () => {
        if (title === 'About Us') return styles.bannerBlockAboutUs;
        if (title === 'Shop') return styles.bannerBlockShop;
        if (title === 'Shop Single') return styles.bannerBlockShopSingle;
        if (title === 'Cart') return styles.bannerBlockCart
        if (title === 'Our Team') return styles.bannerBlockOurTeam
        return ''
    };

    return (
        <section className={styles.bannerBlock}>
            <div className={getClassName()}>
                <h2>{title}</h2>
            </div>
        </section>
    );
};

export default BannerBlock;