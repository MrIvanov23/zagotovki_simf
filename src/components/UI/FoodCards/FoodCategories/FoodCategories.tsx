import { FC, useEffect } from "react";

import styles from "./FoodCategories.module.scss";

import { dataCategories } from "../../../../assets/data/data";

import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { selectFiltersState } from "../../../../redux/filters/selectors";
import { setActiveCategories } from "../../../../redux/filters/slice";

const FoodCategories: FC = () => {
    const dispatch = useAppDispatch();
    const { activeCategories } = useAppSelector(selectFiltersState);

    useEffect(() => {
        dispatch(setActiveCategories(0));
    }, [])

    return (
        <div className={styles.foodCategories}>
            <h3>Категории:</h3>

            <ul>
                {dataCategories.map((category) => (
                    <li
                        key={category.category}
                        className={activeCategories === category.id ? styles.active : ''}
                        onClick={() => dispatch(setActiveCategories(category.id))}
                    >
                        {category.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodCategories;