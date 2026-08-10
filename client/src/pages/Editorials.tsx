import { editorials } from "../data/editorials";
import EditorialCard from "../components/EditorialCard";

export default function Editorials() {
    return (
        <section className="mx-auto max-w-5xl px-8 py-16">

            <h1 className="mb-6 text-5xl font-bold">Editorials</h1>

            {editorials.map((editorial) => (
                <EditorialCard
                    key={editorial.id}
                    editorial={editorial}
                />
            ))}

        </section>
    );
}