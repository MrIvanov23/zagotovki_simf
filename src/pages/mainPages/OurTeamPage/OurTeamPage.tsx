import { FC } from "react";

import BannerBlock from "../../../components/Main/BannerBlock/BannerBlock";
import TeamBlock from "../../../components/Main/AboutUsBlocks/TeamBlock/TeamBlock";

const OurTeamPage: FC = () => {
    return (
        <main>
            <BannerBlock title="Our Team"/>
            <TeamBlock />
        </main>
    );
};

export default OurTeamPage;