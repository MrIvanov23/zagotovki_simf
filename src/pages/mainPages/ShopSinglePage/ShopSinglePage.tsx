import { FC } from "react";

import BannerBlock from "../../../components/Main/BannerBlock/BannerBlock";
import ShopSingleBlock from "../../../components/Main/ShopBlocks/ShopSingleBlock/ShopSingleBlock";
import ShopRelatedProductsBlock from "../../../components/Main/ShopBlocks/ShopRelatedProductsBlock/ShopRelatedProductsBlock";

const ShopSinglePage: FC = () => {
    return (
        <main>
            {/* <BannerBlock title='Shop Single'/> */}
            <ShopSingleBlock />
            <ShopRelatedProductsBlock />
        </main>
    );
};

export default ShopSinglePage;