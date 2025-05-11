// used in /components/Main/HomeBlocks/HomeMiniBannerBlock

import miniBannerBG1 from "../../assets/images/miniBanner-image/miniBannerBG-1.jpg"; 
import miniBannerBG2 from "../../assets/images/miniBanner-image/miniBannerBG-2.jpg";

export interface IDataMiniBanners {
    title: string,
    decription: string,
    image: string,
    color: 'light' | 'dark'
};

export const dataMiniBanners: IDataMiniBanners[] = [
    {
        title: 'Natural!!',
        decription: 'Get Garden Fresh Fruits',
        image: miniBannerBG1,
        color: 'light'
    },
    {
        title: 'Offer!!',
        decription: 'Get 10% off on Vegetables',
        image: miniBannerBG2,
        color: 'dark'
    }
];