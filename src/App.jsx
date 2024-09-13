import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Subscription from "./pages/Subscription/Subscription";
import Bookshelf from "./pages/Bookshelf/Bookshelf";
import Checkout from "./pages/Checkout/Checkout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subscription />} />
                <Route path="/bookshelf" element={<Bookshelf />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
