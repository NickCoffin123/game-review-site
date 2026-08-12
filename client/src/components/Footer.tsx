export default function Footer() {

    const year: number = new Date().getFullYear();

    return (
        <footer className="mx-auto max-x-7xl mb-8">
            <div className="flex justify-center items-center">
                <p className="text-lg">&copy; {year}</p>
            </div>
        </footer>
    )
}