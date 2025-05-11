import { FC } from "react";

import BannerBlock from "../../../components/Main/BannerBlock/BannerBlock";
import AboutUsBlock from "../../../components/Main/AboutUsBlocks/AboutUsBlock/AboutUsBlock";
import WhyChooseUsBlock from "../../../components/Main/AboutUsBlocks/WhyChooseUsBlock/WhyChooseUsBlock";
import TeamBlock from "../../../components/Main/AboutUsBlocks/TeamBlock/TeamBlock";

const AboutUsPage: FC = () => {
    return (
        <main>
            <BannerBlock title='About Us'/>
            <AboutUsBlock />
            <WhyChooseUsBlock />
            <TeamBlock />
        </main>
    );
};

export default AboutUsPage;