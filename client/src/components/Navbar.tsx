import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="border-b">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
                <Link className="text-2xl font-bold" to="/">
                    Game Review Site
                </Link>

                <ul className="flex gap-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link to="/editorials">Editorials</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}