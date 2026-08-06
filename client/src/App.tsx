import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Review from "./pages/Review";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout /> }> 
                    <Route path="/" element={<Home />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/reviews/:slug" element={<Review />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;