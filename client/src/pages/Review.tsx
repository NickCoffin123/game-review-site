import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Review } from "../types/Review";
import placeholderImg from "../assets/placeholder.png";

export default function Review() {

    const [soloReview, setSoloReview] = useState<Review>();
    const [isLoading, setIsLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState<number>();

    const { slug } = useParams();

    useEffect(() => {
        const fetchReview = async () => {
            setIsLoading(true)
            setSoloReview(undefined);
            setErrorStatus(undefined);
            try {

                const response = await fetch(`http://localhost:5085/api/reviews/${slug}`)

                if (!response.ok) {
                    setErrorStatus(response.status)
                    throw new Error(`HTTP error: ${response.status}`)
                }

                const data = await response.json()

                setSoloReview(data)

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }

        }
        fetchReview();

    }, [slug])


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (errorStatus === 404) {
        return <h1>Review not found</h1>;
    }

    if (!soloReview) {
        return <h1>Unable to load review</h1>;
    }

    return (
        <article className="mx-auto max-w-5xl px-8 py-16">
            <header>
                <div className="flex gap-8 mb-2">
                    <img className="h-72 w-52 object-cover rounded-md"
                        src={soloReview.img !== "" ? soloReview.img : placeholderImg}
                        alt={soloReview.title}
                    />
                    <div className="flex flex-col gap-2 justify-center">
                        <h1 className="text-5xl font-bold">{soloReview.title}</h1>
                        <p>{soloReview.tagline}</p>
                    </div>
                </div>
            </header>

            <div className="space-y-4 my-8 text-lg leading-8">
                {soloReview.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <section className="flex gap-8 justify-center items-center">
                <div className="flex-1 rounded-lg border p-6">
                    <h2 className="text-2xl font-bold">The good</h2>
                    <ul>
                        {soloReview.good.map((point, index) => (
                            <li key={index}>✓ {point}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 rounded-lg border p-6">
                    <h2 className="text-2xl font-bold">The bad</h2>
                    <ul>
                        {soloReview.bad.map((point, index) => (
                            <li key={index}>✕ {point}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="mt-4 flex items-center justify-center gap-8 text-4xl font-bold">
                <h2>Verdict</h2>
                <p>{soloReview.rating} / 10</p>
            </section>

        </article>
    )
}