import { Link } from "react-router-dom";
import type { Editorial } from "../types/Editorial"

type EditorialCardProps = {
    editorial: Editorial
};

export default function EditorialCard({ editorial }: EditorialCardProps) {
    return (
        <Link to={`/editorials/${editorial.slug}`}>
            <article className="mb-4 flex gap-8 rounded-lg border p-6">
                <div className="flex shrink-0">
                    <img
                        className="h-40 w-40 rounded-md object-cover"
                        src={editorial.img}
                        alt={editorial.title}
                    />
                </div>
                <div className="flex flex-1 flex-col mt-4 gap-4">
                    <h3 className="text-3xl font-bold">{editorial.title}</h3>
                    <p className="max-w-xl text-lg">{editorial.tagline}</p>
                </div>
            </article>
        </Link>
    )

}