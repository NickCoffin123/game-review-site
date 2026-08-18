import ReviewCard from "../components/ReviewCard";
import { useState, useEffect } from "react";
import type { Review } from "../types/Review";

export default function Reviews() {

    const [allReviews, setAllReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("http://localhost:5085/api/reviews")

                const data = await response.json();

                setAllReviews(data);

            } catch (error) {
                console.log(error)
            }
        }
        fetchReviews();

    }, []);

    return (
        <>
            <section className="mx-auto max-w-5xl px-8 py-16">
                <h1 className="text-5xl font-bold mb-6">Reviews</h1>

                {allReviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    />
                ))}
            </section>
        </>
    )
}