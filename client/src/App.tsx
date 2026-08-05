import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout /> }> 
                    <Route path="/" element={<Home />} />
                    <Route path="/reviews" element={<Reviews /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;