import { FC } from "react";

import styles from "./WhyChooseUsBlock.module.scss";

import whyChooseUsBlockBG from "../../../../assets/images/background-image/WhyChooseUsBlockBG.jpg"

import { IconsWhyChooseCart, IconsWhyChooseCircle, IconsWhyChooseClock, IconsWhyChooseLeaf, IconsWhyChooseProtection } from "../../../_Icons/aboutUsIcons";
 
const WhyChooseUsBlock: FC = () => {
    return (
        <section className={styles.whyChooseUsBlock}>
            <div className={styles.wrapperMain}>
                <div className={styles.wrapper}>
                    <h2>Why Choose us?</h2>
                    <h3>We do not buy from the open market & traders.</h3>

                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

                    <div className={styles.info}>
                        <div className={styles.infoWrapper}>
                            <div>
                                <IconsWhyChooseCircle />
                                <span>100% Natural Product</span>
                            </div>

                            <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        </div>

                        <div className={styles.infoWrapper}>
                            <div>
                                <IconsWhyChooseCircle />
                                <span> Increases resistance</span>
                            </div>

                            <p>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                        </div>
                    </div>
                </div>

                <img src={whyChooseUsBlockBG} alt="Why choose us BG" />
            </div>

            <div className={styles.wrapperInfo}>
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <IconsWhyChooseCart />
                    </div>

                    <h4>Return Policy</h4>
                    <p>Simply dummy text of the printintypesetting industry.</p>
                </div>

                <div className={styles.info}>
                    <div className={styles.icon}>
                        <IconsWhyChooseLeaf />
                    </div>

                    <h4>100% Fresh</h4>
                    <p>Simply dummy text of the printintypesetting industry.</p>
                </div>

                <div className={styles.info}>
                    <div className={styles.icon}>
                        <IconsWhyChooseClock />
                    </div>

                    <h4>Support 24/7</h4>
                    <p>Simply dummy text of the printintypesetting industry.</p>
                </div>

                <div className={styles.info}>
                    <div className={styles.icon}>
                        <IconsWhyChooseProtection />
                    </div>

                    <h4>Secured Payment</h4>
                    <p>Simply dummy text of the printintypesetting industry.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsBlock;