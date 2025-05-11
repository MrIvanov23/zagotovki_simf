import { FC } from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubscribeBlock from "../components/Main/SubscribeBlock/SubscribeBlock";

const MainLayout: FC = () => {
    return (
        <div>
            <Header />

            <Outlet />

            <SubscribeBlock />
            <Footer />
        </div>
    )
};

export default MainLayout;