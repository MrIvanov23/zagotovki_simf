import { FC, useEffect } from "react";

import styles from "./ShopHomeBlock.module.scss";

import { shopBlockMainSkeletonsCount } from "../../../../assets/data/data";

import { createUrlForShopHome } from "../../../../axios/axios";

import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { selectfoodProductsState } from "../../../../redux/foodProducts/selectors";
import { fetchFoodRelatedProducts } from "../../../../redux/foodProducts/asyncThunk";

import FoodCard from "../../../UI/FoodCards/FoodCard/FoodCard";
import FoodCardSkeleton from "../../../UI/FoodCards/FoodCard/FoodCardSkeleton";
import FoodNotFound from "../../../UI/FoodCards/FoodNotFound/FoodNotFound";
import ButtonMain from "../../../UI/Buttons/ButtonMain/ButtonMain";

const ShopHomeBlock: FC = () => {
    const dispatch = useAppDispatch();

    const skeletonsCount = shopBlockMainSkeletonsCount;
    const { statusFoodRelatedProducts: status, foodRelatedProducts } = useAppSelector(selectfoodProductsState);

    useEffect(() => {
        dispatch(fetchFoodRelatedProducts(createUrlForShopHome()));
    }, []);

    const renderFoodCard = foodRelatedProducts.map((food) => <FoodCard key={food.id} {...food}/>);
    const renderSkeleton = [...new Array(skeletonsCount)].map((_, i) => <FoodCardSkeleton key={i}/>)
    const renderNotFound = <FoodNotFound />

    return (
        <section className={styles.shopHomeBlock}>
            <h2>Our Popular Products</h2>

            <div className={status === 'error' ? styles.wrapperError : styles.wrapper}>
                { status === 'error' ? ( 
                    renderNotFound 
                    ) : status === 'success' ? (
                    renderFoodCard
                    ): renderSkeleton
                }
            </div>

            <Link to='/shop'>
                <ButtonMain buttonStyle="main">See More</ButtonMain>
            </Link>
        </section>
    );
};

export default ShopHomeBlock;