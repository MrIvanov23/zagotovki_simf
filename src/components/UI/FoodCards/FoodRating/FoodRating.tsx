import { FC } from "react";

import styles from "./FoodRating.module.scss";

import { IconsRatingStar, IconsRatingStarOff } from "../../../_Icons/UIIcons";

interface IFoodRating {
    rating: number
};

const FoodRating: FC<IFoodRating> = ({ rating }) => {
    return (
        <div className={styles.foodRating}>
            {[...new Array(5)].map((_, i) => (
                rating > i ? <IconsRatingStar key={i}/> : <IconsRatingStarOff key={i}/>                
            ))}
        </div>
    );
};

export default FoodRating;