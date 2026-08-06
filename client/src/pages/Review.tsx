import {useParams} from "react-router-dom";
import { reviews } from "../data/reviews";

export default function Review() {

    const { slug } = useParams();

    const review = reviews.find((review => review.slug === slug))

    if (!review) {
        return <h1>Review not found</h1>
    }

    return (
        <>
            <h1>{review.title}</h1>
        </>
    )
}