import { FC } from "react";

import BannerBlock from "../../../components/Main/BannerBlock/BannerBlock";
import ShopBlockMain from "../../../components/Main/ShopBlocks/ShopBlockMain/ShopBlockMain";

const ShopPage: FC = () => {
    return (
        <main>
            <BannerBlock title="Shop"/>
            <ShopBlockMain />
        </main>
    );
};

export default ShopPage;