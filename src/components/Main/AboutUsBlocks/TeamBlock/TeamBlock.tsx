import { FC } from "react";

import styles from "./TeamBlock.module.scss";

import { dataTeam } from "../../../../assets/data/dataTeam";

import TeamCard from "../../../UI/TeamCards/TeamCard/TeamCard";

const TeamBlock: FC = () => {
    const team = dataTeam;

    return (
        <section className={styles.teamBlock}>
            <h2>Team</h2>
            <h3>Our Organic Experts</h3>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

            <div className={styles.wrapper}>
                { team.map((worker) => <TeamCard key={worker.id} {...worker}/>)}
            </div>
        </section>
    );
};

export default TeamBlock;