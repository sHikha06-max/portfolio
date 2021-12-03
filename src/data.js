const skillsList = [
    { title: "React JS", value: 75 },
    { title: "Node JS ", value: 60 },
    { title: "Express JS ", value: 70 },
    { title: "HTML", value: 70 },
    { title: "CSS", value: 80 },
];
const projectList = [
    {
        id: 1,
        title: "Tunflix",
        overview:"Perp",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://i.ibb.co/L0F7mKX/tunflix.png",
    },
    {
        id: 2,
        title: "Code Hub",
        overview:"Perpuiu",
        technologies: ["React JS"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "https://i.ibb.co/zNMJFTW/Webp-net-resizeimage.png",
    },
    {
        id: 3,
        title: "Burpees.io",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg",
    },
];

const experienceList = [
    {
        id: 0,
        // company: "Code Hub",
        links: {
            website: "data:image/png;base64,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",
            // facebook: "https://www.facebook.com/codehubtn/",
            // instagram: "https://www.instagram.com/codehub.coworking/",
        },
    },
    {
        id: 1,
        company: "Dar Mounira",
        links: {
            facebook: "https://www.facebook.com/profile.php?id=100063463714107",
            instagram: "https://www.instagram.com/darmounira.official",
        },
    },
    {
        id: 2,
        company: "vapoter.tn",
        links: {
            instagram: "https://www.instagram.com/vapoter.tn/",
        },
    },
];

export { skillsList, projectList, experienceList };
