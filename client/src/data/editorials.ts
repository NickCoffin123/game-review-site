import type { Editorial } from "../types/Editorial";
import placeholderImg from "../assets/placeholder.png";

export const editorials: Editorial[] = [
    {
        id: 1,
        title: "The Open World Epidemic",
        tagline: "Open world games, how many are too many?",
        img: placeholderImg,
        slug: "the-open-world-epidemic",
        body: ["here is some stuff,", "There are too many open world games.", "Not everything needs to be open world."],
    },
    {
        id: 2,
        title: "Remakes and Remasters vs New Content",
        tagline: "Is the onslaught of remade content keeping us from new experiences or" +
            " does making old games accessible give people a way to experience mechanically dated masterpieces?",
        img: placeholderImg,
        slug: "remakes-and-remasters-vs-new-content",
        body: ["here is some stuff.", "So many remakes and remasters with differing degrees of quality.",
            "The money dumped into it keeps money from going into new content."],
    },
    {
        id: 3,
        title: "Is Early Access Going Too Far?",
        tagline: "At what point is early access a crutch?",
        img: placeholderImg,
        slug: "is-early-access-going-to-far",
        body: ["here is some stuff.", "I love Project Zomboid but 10 years is crazy",
            "I know it helps devs with little to no funding to make a game but there should be some" +
            " kind of promise for delivery of product."],
    },

]