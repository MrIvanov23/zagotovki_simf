import { FC, useEffect } from "react";

import styles from "./ShopSingleBlock.module.scss";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { selectfoodProductsState } from "../../../../redux/foodProducts/selectors";
import { setActiveCategories } from "../../../../redux/filters/slice";
import { fetchFoodById } from "../../../../redux/foodProducts/asyncThunk";

import { createUrlByID } from "../../../../axios/axios";
import { dataCategories } from "../../../../assets/data/data";

import ShopSingleBlockSkeleton from "./ShopSingleBlockSkeleton";

import FoodRating from "../../../UI/FoodCards/FoodRating/FoodRating";
import FoodPrice from "../../../UI/FoodCards/FoodPrice/FoodPrice";
import CartActions from "../../../UI/CartCards/CartActions/CartActions";
import ButtonMain from "../../../UI/Buttons/ButtonMain/ButtonMain";

const ShopSingleBlock: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { id } = useParams();
    const { statusFoodById: status, foodById } = useAppSelector(selectfoodProductsState);
    const cartItem = useAppSelector((state) => state.cart.cartItems.find((obj) => obj.id === id));

    useEffect(() => {
        dispatch(fetchFoodById(createUrlByID(id)));
    }, [location.pathname])

    useEffect(() => {
        if (foodById) dispatch(setActiveCategories(foodById.category));
    }, [foodById])
    
    if (status === 'error') {
        navigate('/error');
    };

    return (
        <>
            <section className={styles.shopSingleBlock}>
                { status === 'loading' ? (
                    <ShopSingleBlockSkeleton />
                ) : foodById && (
                    <>
                        <div className={styles.wrapperImg}>
                            <div className={styles.category}>{dataCategories[foodById.category].category}</div>

                            <img src={foodById.images[0]} alt={foodById.title} />
                        </div>

                        <div className={styles.wrapperDescription}>
                            <h2>{foodById.title}</h2>

                            <div className={styles.info}>
                                <FoodRating rating={foodById.rating}/>
                                <FoodPrice price={foodById.price} quantity={cartItem ? cartItem.quantity : 1}/>
                            </div>

                            <p className={styles.description}>{foodById.description}</p>

                            <CartActions {...foodById} quantity={1}/>
                        </div>

                        
                    </>
                )}
            </section>

            <div className={styles.links}>
                <Link to='/shop'>
                    <ButtonMain buttonStyle="third" >Shop</ButtonMain>
                </Link>

                <Link to='/cart'>
                    <ButtonMain buttonStyle="third" >Cart</ButtonMain>
                </Link>
            </div>
        </>
    );
};

export default ShopSingleBlock;