import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

export default function App() {
    return (
			<BrowserRouter>
				<nav>
					<h1>CreatorSpot</h1>
					<Link to="/">Home</Link>
					<Link to="/create">Create</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/:id" element={<Update />} />
				</Routes>
			</BrowserRouter>
		);
}
