import { FC } from "react";

import styles from "./TeamCard.module.scss";

import { IDataTeamWorker } from "../../../../assets/data/dataTeam";

import TeamLink from "../TeamLink/TeamLink";

const TeamCard: FC<IDataTeamWorker> = ({ name, profession, photo, links }) => {
    return (
        <article className={styles.teamCart}>
            <img src={photo} alt={`Worker ${name}`} />

            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <h4>{name}</h4>
                    <span>{profession}</span>
                </div>

                <div className={styles.wrapperLinks}>
                    { links.map((link) => <TeamLink key={link.name} {...link} /> )}
                </div>
            </div>
        </article>
    );
};

export default TeamCard;