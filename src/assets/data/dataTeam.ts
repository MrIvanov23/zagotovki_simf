// used in /components/Main/AboutUsBlocks/TeamBlock

import photoGiovaniBacardo from "../../assets/images/team-image/GiovaniBacardo.jpg";
import photoMarianneLoreno from "../../assets/images/team-image/MarianneLoreno.jpg";
import photoRigaPelore from "../../assets/images/team-image/RigaPelore.jpg";
import photoKeiraKnightley from "../../assets/images/team-image/KeiraKnightley.jpg";
import photoScottLawrence from "../../assets/images/team-image/ScottLawrence.jpg";
import photoKarenAllen from "../../assets/images/team-image/KarenAllen.jpg";

export interface IDataTeamLink {
    name: 'instagram' | 'facebook' | 'twitter',
    link: string 
};

export interface IDataTeamWorker {
    id: string,
    name: string,
    profession: string,
    photo: string,
    links: IDataTeamLink[]
};

export const dataTeam: IDataTeamWorker[] = [
    {
        id: '1',
        name: 'Giovani Bacardo', 
        profession: 'Farmer',
        photo: photoGiovaniBacardo,
        links: [
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '2',
        name: 'Marianne Loreno', 
        profession: 'Designer',
        photo: photoMarianneLoreno,
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '3',
        name: 'Riga Pelore', 
        profession: 'Farmer',
        photo: photoRigaPelore,
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '4',
        name: 'Keira Knightley', 
        profession: 'Farmer',
        photo: photoKeiraKnightley,
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            }
        ]
    },
    {
        id: '5',
        name: 'Scott Lawrence', 
        profession: 'Designer',
        photo: photoScottLawrence,
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '6',
        name: 'Karen Allen', 
        profession: 'Farmer',
        photo: photoKarenAllen,
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            }
        ]
    },
];