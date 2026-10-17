import { editorials } from "../data/editorials";
import EditorialCard from "../components/EditorialCard";
import type { Editorial } from "../types/Editorial";
import { useState, useEffect } from "react";

export default function Editorials() {

    const [allEditorials, setAllEditorials] = useState<Editorial[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchEditorials = async () => {
            try {
                const response = await fetch("http://localhost:5085/api/editorials");

                if (!response.ok) {
                    throw new Error(`HTTP ERROR ${response.status}`);
                }

                const data = await response.json();

                setAllEditorials(data);
            } catch (error) {
                console.log(error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEditorials();

    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>Unable to load editorials.</p>
    }

    return (
        <section className="mx-auto max-w-5xl px-8 py-16">

            <h1 className="mb-6 text-5xl font-bold">Editorials</h1>

            {allEditorials.map((editorial) => (
                <EditorialCard
                    key={editorial.id}
                    editorial={editorial}
                />
            ))}

        </section>
    );
}