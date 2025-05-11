import { FC } from "react";

import HomeBannerBlock from "../../../components/Main/HomeBlocks/HomeBannerBlock/HomeBannerBlock";
import HomeMiniBannerBlock from "../../../components/Main/HomeBlocks/HomeMiniBannerBlock/HomeMiniBannerBlock";
import HomeAboutUsBlock from "../../../components/Main/HomeBlocks/HomeAboutUsBlock/HomeAboutUsBlock";
import ShopHomeBlock from "../../../components/Main/ShopBlocks/ShopHomeBlock/ShopHomeBlock";

const HomePage: FC = () => {
    return (
        <main>
            <HomeBannerBlock />
            <HomeMiniBannerBlock />
            <HomeAboutUsBlock />
            <ShopHomeBlock />
        </main>
    );
};

export default HomePage;