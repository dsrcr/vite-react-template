import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        index
                        element
                    />
                </Routes>
            </BrowserRouter>
            <h1>App</h1>
        </div>
    );
}
