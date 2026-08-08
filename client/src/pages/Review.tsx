import { useParams } from "react-router-dom";
import { reviews } from "../data/reviews";

export default function Review() {

    const { slug } = useParams();

    const review = reviews.find((review => review.slug === slug))

    if (!review) {
        return <h1>Review not found</h1>
    }

    return (
        <>
            <section className="mx-auto max-w-5xl px-8 py-16">
                <div className="flex gap-8 mb-2">
                    <img className="h-72 w-52 object-cover rounded-md"
                        src={review.img} alt={review.title}
                    />
                    <div className="flex flex-col gap-2 justify-center">
                        <h1 className="text-5xl font-bold">{review.title}</h1>
                        <p>{review.tagline}</p>
                    </div>
                </div>

                <div className="space-y-4 my-8 text-lg leading-8">
                    {review.body.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="flex gap-8 justify-center items-center">
                    <div className="flex-1 rounded-lg border p-6">
                        <h2 className="text-2xl font-bold">The good</h2>
                        <ul>
                            {review.good.map((point, index) => (
                                <li key={index}>✓ {point}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 rounded-lg border p-6">
                        <h2 className="text-2xl font-bold">The bad</h2>
                        <ul>
                            {review.bad.map((point, index) => (
                                <li key={index}>✕ {point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-8 text-4xl font-bold">
                    <p>Verdict</p>
                    <p>{review.rating} / 10</p>
                </div>
            </section>
        </>
    )
}