import { FC } from "react";

import styles from "./TeamLink.module.scss";

import { IDataTeamLink } from "../../../../assets/data/dataTeam";

import { IconsTeamFacebock, IconsTeamInstagram, IconsTeamTwitter } from "../../../_Icons/teamIcons";

const TeamLink: FC<IDataTeamLink> = ({ name, link}) => {
    const renderIcon = () => {
        if (name === 'instagram') return <IconsTeamInstagram />;
        if (name === 'facebook') return <IconsTeamFacebock />;
        if (name === 'twitter') return <IconsTeamTwitter />;
    }; 

    return (
        <a
            className={styles.teamLink}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            {renderIcon()}
        </a>
    );
};

export default TeamLink;