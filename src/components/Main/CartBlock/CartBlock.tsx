import { FC } from "react";

import styles from "./CartBlock.module.scss" ;

import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectCartState } from "../../../redux/cart/selectors";
import { clearCartItems } from "../../../redux/cart/slice";

import CartCard from "../../UI/CartCards/CartCard/CartCard";
import ButtonMain from "../../UI/Buttons/ButtonMain/ButtonMain";

const CartBlock: FC = () => {
    const dispatch = useAppDispatch();

    const { cartItems } = useAppSelector(selectCartState);
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const onClickClearCart = () => {
        dispatch(clearCartItems());
    };

    const onClickOrder = () => {
        alert('Возможность заказать отсутствует, это учебный проект 🤗')
    };

    return (
        <section className={styles.cartBlock}>
            { cartItems.length > 0 ? (
                <>
                    <div className={styles.wrapperButton}>
                        <ButtonMain buttonStyle="third" onClick={onClickClearCart}>Clear Cart</ButtonMain>
                    </div>

                    <div className={styles.wrapper}>
                        { cartItems && cartItems.map((item) => <CartCard key={item.id} {...item}/>) }                
                    </div>

                    <div className={styles.wrapperButton}>
                        <h2>Total price: ${totalPrice}.00</h2>

                        <ButtonMain buttonStyle="second" onClick={onClickOrder}>Order</ButtonMain>
                    </div>
                </>
            ) : (
                <div className={styles.empty}>
                    <h2>Cart empty</h2>

                    <Link to={'/shop'}>
                        <ButtonMain buttonStyle="main">Shop</ButtonMain>
                    </Link>
                </div>
            )}                
        </section>
    );
};

export default CartBlock;