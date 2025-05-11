import { FC } from "react";

import styles from "./ShopSingleBlock.module.scss";

const ShopSingleBlockSkeleton: FC = () => {
    return (
        <>
            <div className={styles.wrapperImg}></div>
                
            <div className={styles.wrapperDescriptionSkeleton}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default ShopSingleBlockSkeleton;