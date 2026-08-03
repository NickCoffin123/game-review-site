import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import placeholderImg from "../assets/placeholder.png"

export default function Home() {
    return (
        <>
            {/* Hero Section */}
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

            {/*Review section*/}
            <section className="mx-auto max-w-5xl px-8 py-16">
                <h2 className="mb-4 text-4xl font-bold">Latest Reviews</h2>

                <ReviewCard
                    img={placeholderImg}
                    title="Persona 5 Royal"
                    rating={10}
                    tagline="A masterclass JRPG with time management mechanics."
                />
                <ReviewCard
                    img={placeholderImg}
                    title="Resident Evil 4 Remake"
                    rating={10}
                    tagline="An action packed adventure filled with captivating gameplay, fantastic setting, and fun challenges."
                />
                <ReviewCard
                    img={placeholderImg}
                    title="The Legend of Zelda: Ocarina of Time"
                    rating={10}
                    tagline="A timeless classic that sets the exapmle for adventure games."
                />

            </section>
        </>
    );
}