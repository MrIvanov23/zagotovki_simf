import { FC, useEffect, useRef, useState } from "react";

import styles from "../Header.module.scss";

import { Link } from "react-router-dom";

import { useAppSelector } from "../../../redux/store";
import { selectCartState } from "../../../redux/cart/selectors";

import { IconsCart } from "../../_Icons/Icons";

const HeaderCart: FC = () => {
    const { cartItems } = useAppSelector(selectCartState);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const isMounted = useRef(false);

    const countCartItems = () => {
        if (cartItems) {
            setCartItemsCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
        };
    };

	useEffect(() => {
		if (isMounted.current) {
			localStorage.setItem('organicFoodCartItems' , JSON.stringify(cartItems));
		};

        countCartItems();

		isMounted.current = true;
	}, [cartItems]);

    return (
        <Link to='/cart' className={styles.headerCart}>
            <IconsCart />

            <span>{`Cart (${cartItemsCount})`}</span>
        </Link>
    );
};

export default HeaderCart;