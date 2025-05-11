import { FC, useEffect, useRef, useState } from "react";

import styles from "../Header.module.scss";

import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setActiveSearchValue } from "../../../redux/filters/slice";
import { selectFiltersState } from "../../../redux/filters/selectors";

import { IconsSearch } from "../../_Icons/Icons";

const HeaderSearch: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { activeSearchValue } = useAppSelector(selectFiltersState);
    const [currentValue, setCurrentValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const isMounted = useRef(false);

    

    useEffect(() => {
        if (isMounted.current) {
            if (location.pathname !== '/shop') navigate('/shop');

            dispatch(setActiveSearchValue(currentValue));

            return
        }
        
        isMounted.current = true;
    }, [currentValue]);

    useEffect(() => {
        if (location.pathname === '/shop' && currentValue !== activeSearchValue) {
            setCurrentValue(activeSearchValue);
        }
    }, [activeSearchValue]);

    useEffect(() => {
        location.pathname === '/shop' && inputRef.current?.focus();
    }, [location.pathname]);

    return (
        <div className={styles.headerSearch}>
            <input
                type="text"
                placeholder="search food"
                ref={inputRef}
                value={location.pathname === '/shop' ? currentValue : ''}
                onChange={(event) => {
                    setCurrentValue(event.target.value);
                }}
            />
            
            <IconsSearch />
        </div>
    );
};

export default HeaderSearch;