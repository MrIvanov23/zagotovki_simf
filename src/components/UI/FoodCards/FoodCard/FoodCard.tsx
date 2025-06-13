import { FC } from "react";

import styles from "./FoodCard.module.scss";
import FoodPrice from "../FoodPrice/FoodPrice";
import FoodRating from "../FoodRating/FoodRating";
import { dataCategories } from "../../../../assets/data/data";
import { Link } from "react-router-dom";

interface IFoodCard {
    id: string,
    title: string,
    description: string,
    price: number,
    category: number,
    rating: number,
    images: string[]
};

const FoodCard: FC<IFoodCard> = ({ id, title, price, category, rating, images }) => {
    return (
        <Link to={`/food/${id}`}>
            <article className={styles.card}>
                {/* <div className={styles.cardCategory}>{dataCategories[category].category}</div> */}

                <div className={styles.cardImg}>
                    <img src={images[0]} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className={styles.cardInfo}>
                    <FoodPrice price={price} />
                    {/* <FoodRating rating={rating} /> */}
                </div>
            </article>
        </Link>
    );
};

export default FoodCard;