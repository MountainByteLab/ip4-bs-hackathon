import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Subscription from "./pages/Subscription/Subscription";
import Bookshelf from "./pages/Bookshelf/Bookshelf";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Subscription />} />
                <Route path="/bookshelf" element={<Bookshelf />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
