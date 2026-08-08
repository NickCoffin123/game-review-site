export type Review = {
    id: number;
    title: string;
    slug: string;
    img: string;
    rating: number;
    tagline: string;
    body: string[];
    good: string[];
    bad: string[];
}