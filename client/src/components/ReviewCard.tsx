type ReviewCardProps = {
    img: string;
    title: string;
    tagline: string;
    rating: number;

};

export default function ReviewCard({
    img,
    title,
    tagline,
    rating
}: ReviewCardProps) {
    return (
        <article className="mb-6 flex gap-8 rounded-lg border p-6">

            <div className="flex-shrink-0">
                <img
                    className="h-40 w-40 rounded-md object-cover"
                    src={img}
                    alt={title}
                />
            </div>

            <div className="flex flex-1 flex-col">
                <h3 className="text-3xl font-bold">{title}</h3>

                <div className="mt-4 flex items-start justify-between">
                    <p className="max-w-xl text-lg grey-700">{tagline}</p>
                    <p className="text-3xl font-bold">{rating}/10</p>
                </div>
            </div>
        </article>
    )
}