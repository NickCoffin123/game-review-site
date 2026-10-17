import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Editorial } from "../types/Editorial";
import placeholderImg from "../assets/placeholder.png";

export default function Editorial() {

    const [soloEditorial, setSoloEditorial] = useState<Editorial>();
    const [isLoading, setIsLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState<number>();

    const { slug } = useParams();

    useEffect(() => {
        const fetchEditorial = async () => {
            setIsLoading(true);
            setErrorStatus(undefined);
            setSoloEditorial(undefined);
            try {
                const response = await fetch(`http://localhost:5085/api/editorials/${slug}`);

                if (!response.ok) {
                    setErrorStatus(response.status);
                    throw new Error(`HTTP ERROR ${response.status}`);
                }

                const data = await response.json();

                setSoloEditorial(data);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEditorial();

    }, [slug])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (errorStatus === 404) {
        return <p>Editorial not found.</p>
    }

    if (!soloEditorial) {
        return <p>Editoral does not exist.</p>
    }

    return (
        <article className="mx-auto max-w-5xl px-8 py-16">
            <header>
                <div className="flex gap-8 mb-2">
                    <img className="w-52 h-72 object-cover rounded-md"
                        src={soloEditorial.img !== "" ? soloEditorial.img : placeholderImg}
                        alt={soloEditorial.title}
                    />

                    <div className="flex flex-col gap-8 justify-center">
                        <h1 className="text-3xl font-bold">{soloEditorial.title}</h1>
                        <p className="text-lg">{soloEditorial.tagline}</p>
                    </div>
                </div>
            </header>

            <div className="space-y-4 my-4 text-lg leading-8">
                {soloEditorial.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

        </article>
    )
}