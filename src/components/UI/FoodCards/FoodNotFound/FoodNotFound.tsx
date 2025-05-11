import { FC } from "react";

import styles from "./FoodNotFound.module.scss";

import { useAppDispatch } from "../../../../redux/store";
import { setActiveSearchValue } from "../../../../redux/filters/slice";

import ButtonMain from "../../Buttons/ButtonMain/ButtonMain";

const FoodNotFound: FC = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(setActiveSearchValue(''));
    };

    return (
        <div className={styles.foodNotFound}>
            <h3>Nothing found...</h3>

            <ButtonMain onClick={onClick}>Clear search</ButtonMain>
        </div>
    );
};

export default FoodNotFound;