import { Link } from "react-router-dom";

export default function Home() {
    return (
        //Hero Section
        <section className="mx-auto max-w-5xl px-8 py-16">
            <h1 className="text-5xl font-bold">
                Game Review Site
            </h1>
            {/* Some logo here later */}
            <p className="mt-6 max-w-2xl text-lg leading-8">
                Longtime gamer who's spent too much time talking about it to myself. Here are some
                reviews and editorials, Welcome I hope you enjoy.
            </p>
            <div className="mt-8 flex gap-4">
                <Link to="/reviews" className="rounded-md border px-6 py-3">Reviews</Link>
                <Link to="/editorials" className="rounded-md border px-6 py-3">Editorials</Link>
            </div>
        </section>
    );
}