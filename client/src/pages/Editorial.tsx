import { useParams } from "react-router-dom";
import { editorials } from "../data/editorials";

export default function Editorial() {

    const { slug } = useParams();

    const editorial = editorials.find((editorial) => editorial.slug === slug);

    if (!editorial) {
        return <h1>No Editorial found</h1>
    }

    return (
        <article className="mx-auto max-w-5xl px-8 py-16">
            <header>
                <div className="flex gap-8 mb-2">
                    <img className="w-52 h-72 object-cover rounded-md"
                        src={editorial.img}
                        alt={editorial.title}
                    />

                    <div className="flex flex-col gap-8 justify-center">
                        <h1 className="text-3xl font-bold">{editorial.title}</h1>
                        <p className="text-lg">{editorial.tagline}</p>
                    </div>
                </div>
            </header>

            <div className="space-y-4 my-4 text-lg leading-8">
                {editorial.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

        </article>
    )
}