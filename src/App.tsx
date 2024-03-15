import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Alerts from "./components/alerts";
import History from "./components/history";
import Header from "./components/header";
import 'leaflet/dist/leaflet.css';



function App() {
	return (
		<>
		<BrowserRouter>
		{/* <Header/> */}
			<Routes>
				<Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/alerts" element={<Alerts />} />
				<Route path="/history" element={<History/>} />
            </Routes>
		</BrowserRouter>

		</>
	)
}

export default App;
