import { FC } from "react";

import styles from "./NotFoundPage.module.scss"

import { Link } from "react-router-dom";

import { Icons404, IconsNotFoundBG } from "../../../components/_Icons/utilityIcons";
import ButtonMain from "../../../components/UI/Buttons/ButtonMain/ButtonMain";

const NotFoundPage: FC = () => {
    return (
        <main className={styles.notFount}>
            <div className={styles.wpapper}>
                <div className={styles.icon}></div>
                
                <div className={styles.description}>
                    <span>
                        <Icons404 />
                    </span>
                    
                    <h2>Page not found</h2>
                    <p>The page you are looking for doesn't exist or has been moved</p>

                    <Link to='/'>
                        <ButtonMain buttonStyle="main" >Go to Homepage</ButtonMain>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;