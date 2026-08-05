import type { Review } from "../types/Review";

type ReviewCardProps = {
    review: Review
};

export default function ReviewCard({
    review
}: ReviewCardProps) {
    return (
        <article className="mb-6 flex gap-8 rounded-lg border p-6">

            <div className="flex-shrink-0">
                <img
                    className="h-40 w-40 rounded-md object-cover"
                    src={review.img}
                    alt={review.title}
                />
            </div>

            <div className="flex flex-1 flex-col">
                <h3 className="text-3xl font-bold">{review.title}</h3>

                <div className="mt-4 flex items-start justify-between">
                    <p className="max-w-xl text-lg gray-700">{review.tagline}</p>
                    <p className="text-3xl font-bold">{review.rating}/10</p>
                </div>
            </div>
        </article>
    )
}