import { FC } from "react";

import styles from "./FoodPrice.module.scss";

interface IFoodPrice {
    price: number
    quantity?: number
};

const FoodPrice: FC<IFoodPrice> = ({ price, quantity = 1 }) => {
    return (
        <h4 className={styles.foodPrice}>
            <span>{`$${price * quantity + 5 * quantity}.00`}</span>
            {`$${price * quantity}.00`}
        </h4>
    );
};

export default FoodPrice;