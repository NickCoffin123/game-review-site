import placeholderImg from "../assets/placeholder.png";
import type { Review } from "../types/Review";

export const reviews: Review[] = [

    {
        id: 1,
        img: placeholderImg,
        title: "Persona 5 royal",
        slug: "persona-5-royal",
        rating: 10,
        tagline: "A masterclass JRPG with time management mechanics.",
        body: ["Sup", "here is the review"],
        good: ["Good stuff here,", "and here,", "and here."],
        bad: ["Bad stuff here,", " and here,", " and here."]

    },
    {
        id: 2,
        img: placeholderImg,
        title: "Resident Evil 4 Remake",
        slug: "resident-evil-4-remake",
        rating: 10,
        tagline: "An action packed adventure filled with captivating gameplay, fantastic setting, and fun challenges.",
        body: ["Sup", "here is the review"],
        good: ["Good stuff here,", "and here,", "and here."],
        bad: ["Bad stuff here,", " and here,", " and here."]
    },
    {
        id: 3,
        img: placeholderImg,
        title: "The Legend of Zelda: Ocarina of Time",
        slug: "the-legend-of-zelda-ocarina-of-time",
        rating: 10,
        tagline: "A timeless classic that sets the example for adventue.",
        body: ["Sup", "here is the review"],
        good: ["Good stuff here,", "and here,", "and here."],
        bad: ["Bad stuff here,", " and here,", " and here."]
    }

];