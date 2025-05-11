import { FC } from "react";

import styles from "./MiniBannerCard.module.scss";

import { IDataMiniBanners } from "../../../assets/data/dataMiniBanners";

const MiniBannerCard: FC<IDataMiniBanners> = ({ title, decription, image, color }) => {
    const getClassName = () => {
        if ( color === 'light') return styles.light
        return styles.dark
    };

    return (
        <article className={styles.miniBannerCard}>
            <img src={image} alt={decription} />

            <div className={`${styles.wrapper} ${getClassName()}`}>
                <h2>{title}</h2>
                <h3>{decription}</h3>
            </div>
        </article>
    );
};

export default MiniBannerCard;