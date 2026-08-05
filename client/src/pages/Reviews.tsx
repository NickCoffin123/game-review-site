import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";

export default function Reviews() {
    return (
        <>
            <section className="mx-auto max-w-5xl px-8 py-16">
                <h1 className="text-5xl font-bold">Reviews</h1>

                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    />
                ))}
            </section>
        </>
    )
}