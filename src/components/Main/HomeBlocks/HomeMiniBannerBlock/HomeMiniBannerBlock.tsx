import { FC } from "react";

import styles from "./HomeMiniBannerBlock.module.scss";

import { dataMiniBanners } from "../../../../assets/data/dataMiniBanners";

import MiniBannerCard from "../../../UI/MiniBannerCard/MiniBannerCard";

const HomeMiniBannerBlock: FC = () => {
    const miniBanners = dataMiniBanners;

    return (
        <section className={styles.homeMiniBannerBlock}>
            { miniBanners.map((banner) => <MiniBannerCard key={banner.title} {...banner}/>) }
        </section>
    );
};

export default HomeMiniBannerBlock;