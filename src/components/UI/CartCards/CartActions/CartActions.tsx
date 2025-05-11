import { FC } from "react";

import styles from "./CartActions.module.scss";

import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { addCartItem, removeCartItem } from "../../../../redux/cart/slice";
import { ICartItem } from "../../../../redux/cart/types";

import ButtonMain from "../../Buttons/ButtonMain/ButtonMain";

const CartActions: FC<ICartItem> = ({ id, title, price, images }) => {
    const dispatch = useAppDispatch();
    const cartItem = useAppSelector((state) => state.cart.cartItems.find((obj) => obj.id === id));

    const onClickMinus = () => {
        if ( cartItem ) dispatch(removeCartItem(`${id}`)) 
    };

    const onClickAddToCart = () => {
        const item = {
            id: id,
            title: title,
            price: price,
            images: images,
            quantity: 1
        };

        dispatch(addCartItem(item));
    };

    return (
        <div className={styles.cartActions}>
            <div className={styles.quantity}>
                <h3>Quantity :</h3>

                <div className={styles.quantityButton}>
                    <button onClick={onClickMinus}>-</button>
                    <span>
                        {cartItem ? cartItem.quantity : 0}
                    </span>
                    <button onClick={onClickAddToCart}>+</button>
                </div>
            </div>

            <ButtonMain onClick={onClickAddToCart} >{cartItem ? 'Add more' : 'Add To Cart'}</ButtonMain>
        </div>
    );
};

export default CartActions;