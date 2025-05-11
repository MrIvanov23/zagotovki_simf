import { FC } from "react";

import BannerBlock from "../../../components/Main/BannerBlock/BannerBlock";
import CartBlock from "../../../components/Main/CartBlock/CartBlock";

const CartPage: FC = () => {
    return (
        <main>
            <BannerBlock title="Cart"/>
            <CartBlock />
        </main>
    );
}

export default CartPage;