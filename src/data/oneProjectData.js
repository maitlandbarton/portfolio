import dd1 from "../images/dd-1.png";
import dd2 from "../images/dd-2.png";
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
        objective: 'Creating a simple Javascript game through DOM manipluation, HTML, and CSS. To be classified as a game, it must have logic for either winning or losing. This aim of this project was to display our knowledge of OOP and using Javascript classes effectively.',
        description: 'For my game, I decided to use my cat, Dumpling, as the main player. The rest of my inspiration for the game play stemmed from this, as it only seemed fitting that he would be trying to collect dumplings. The player uses the arrow keys to move, space bar to shoot and must try to collect as many dumplings as possible while dodging the dogs before they run out of lives!',
        images: [
            {
                id: 1,
                alt: "Dumpling Dash Screenshot",
                img: dd1
            },
            {
                id: 2,
                alt: "Dumpling Dash Screenshot",
                img: dd2
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
            'React, Node.js, Express.js, MongoDB, Bootstrap, Socket.io'
        ],
        demo: 'https://whisker-weekends.netlify.app/',
        sourceCode: 'https://github.com/dumpling-charlie/whisker-weekends-client',
        objective: 'Designing, building, and delivering a fullstack web application, with an SPA frontend, a REST API backend, and at least 3 database models...in just one week! Working in pairs, we needed to build a site that allows users to sign up, read, edit, delete and create different types of data while also employing our newly gained knowledge of React.',
        description: 'My teammate and I drew our inspiration for the application from the love of our pets, so we made a website that allows pet owners to meet up for pet playdates. Our site has user authentication and authorization, centralized error handling, a live chat function for users who are online, and allows users to create profiles for themselves and their pets. They can organize and save events, share and save pet friendly locations in their area, and chat with other pet owners.',
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