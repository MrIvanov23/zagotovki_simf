import { FC, useState } from "react";

import styles from "./SubscribeBlock.module.scss";

import ButtonMain from "../../UI/Buttons/ButtonMain/ButtonMain";

const SubscribeBlock: FC = () => {
    const [currentValue, setCurrentValue] = useState('');

    const onClickButton = () => {
        alert(`Это учебный проект, но предположим, что подпискана будет оформленна email: ${currentValue} 😏`);
        setCurrentValue('');
    };

    return (
        <aside>
            <section className={styles.subscribe}>
                <form action="" className={styles.form}>
                    <h2>Subscribe to our Newsletter</h2>

                    <div className={styles.wrapper}>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Your Email Address"
                            value={currentValue}
                            onChange={(event) => setCurrentValue(event.target.value)}
                        />
                        
                        <ButtonMain onClick={onClickButton}>Subscribe</ButtonMain>
                    </div>
                </form>
            </section>
        </aside>
    );
};

export default SubscribeBlock;