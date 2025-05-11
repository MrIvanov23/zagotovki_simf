import { FC, useEffect, useRef } from "react";

import styles from "./ShopBlockMain.module.scss";

import { shopBlockMainSkeletonsCount } from "../../../../assets/data/data";

import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { selectfoodProductsState } from "../../../../redux/foodProducts/selectors";
import { selectFiltersState } from "../../../../redux/filters/selectors";
import { fetchFoodProducts } from "../../../../redux/foodProducts/asyncThunk";

import { createUrl } from "../../../../axios/axios";

import FoodCardSkeleton from "../../../UI/FoodCards/FoodCard/FoodCardSkeleton";

import FoodCard from "../../../UI/FoodCards/FoodCard/FoodCard";
import FoodNotFound from "../../../UI/FoodCards/FoodNotFound/FoodNotFound";
import FoodCategories from "../../../UI/FoodCards/FoodCategories/FoodCategories";

const ShopBlockMain: FC = () => {
    const skeletonsCount = shopBlockMainSkeletonsCount;

    const dispatch = useAppDispatch();
    const { foodProductsList, status } = useAppSelector(selectfoodProductsState);
    const { activeCategories, activeSearchValue } = useAppSelector(selectFiltersState);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const debounce = setTimeout(() => dispatch(fetchFoodProducts(createUrl(activeSearchValue, activeCategories))), 200);
                
            return () => clearTimeout(debounce);
        };

        dispatch(fetchFoodProducts(createUrl(activeSearchValue, activeCategories)));

        isMounted.current = true;
    }, [activeCategories, activeSearchValue]);

    const renderFoodCard = foodProductsList.map((food) => <FoodCard key={food.id} {...food}/>);
    const renderSkeleton = [...new Array(skeletonsCount)].map((_, i) => <FoodCardSkeleton key={i}/>)
    const renderNotFound = <FoodNotFound />

    return (
        <section className={styles.shopBlockMain}>
            { status !== 'error' && <FoodCategories />}

            <div className={status === 'error' ? styles.wrapperError : styles.wrapper}>
                { status === 'error' ? ( 
                    renderNotFound 
                    ) : status === 'success' ? (
                    renderFoodCard
                    ): renderSkeleton
                }
            </div>
        </section>
    );
}

export default ShopBlockMain;