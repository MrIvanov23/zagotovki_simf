import { FC } from "react";

import styles from "./FoodCard.module.scss"

const FoodCardSkeleton: FC = () => {
    return (
        <div className={styles.card}>
        </div>
    );
};

export default FoodCardSkeleton;