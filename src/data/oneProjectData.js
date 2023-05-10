import image1 from "../images/poke_community.png";
import image2 from "../images/whisker_weekends.png";
import poke1 from "../images/poke-1.png";
import poke2 from "../images/poke-2.png";
import ww1 from "../images/ww-1.png";
import ww2 from "../images/ww-2.png";

export const oneProjectData = [
    {
        title: "Dumpling Dash",
        technologiesUsed: [
            'Javascript', 'HTML', 'CSS'
        ],
        demo: 'https://maitlandbarton.github.io/dumpling-dash-game/',
        sourceCode: 'https://github.com/maitlandbarton/dumpling-dash-game',
        objective: 'this is the objective paragraph',
        description: 'this is the description paragraph',
        images: [
            {
                id: 1,
                alt: "Dumpling Dash Screenshot",
                img: image1
            },
            {
                id: 2,
                alt: "Dumpling Dash Screenshot",
                img: image2
            }
        ]
    },
    {
        title: "Pokemon Community",
        technologiesUsed: [
            'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'
        ],
        demo: 'https://pokemon-community-project.adaptable.app/',
        sourceCode: 'https://github.com/DumplingFox/pokemon-community-project',
        objective: 'Designing, building, and delivering an Express app that allows users to register an account, read, update, create, and delete data. This project was done in pairs and intended to test our skills with Express, Node, Mongoose and a CSS framework of our choice.',
        description: 'My teammate and I took a fun, nostalgic approach to this project, as we both grew up playing and watching Pokemon. Combining something from our childhoods with our coding learning experience made it that much more exciting. Pokemon Community is essentially a Pokemon forum for those who share our nostalgia, where users can sign up, share and like posts, view the pokedex and save their favorite pokemon!',
        images: [
            {
                id: 1,
                alt: "Poke Community Screenshot",
                img: poke1
            },
            {
                id: 2,
                alt: "Poke Community Screenshot",
                img: poke2
            }
        ]
    },
    {
        title: "Whisker Weekends",
        technologiesUsed: [
            'React, Node.js, Express.js, MongoDB, Bootstrap'
        ],
        demo: 'https://whisker-weekends.netlify.app/',
        sourceCode: 'https://github.com/dumpling-charlie/whisker-weekends-client',
        objective: 'this is the objective paragraph',
        description: 'this is the description paragraph',
        images: [
            {
                id: 1,
                alt: "Whisker Weekends Screenshot",
                img: ww1
            },
            {
                id: 2,
                alt: "Whisker Weekends Screenshot",
                img: ww2
            }
        ]
    }
]