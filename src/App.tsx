import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Alerts from "./components/alerts";
import History from "./components/history";


function App() {
	return (
		<>
		<BrowserRouter>
			<Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
				<Route path="/alerts" element={<Alerts />} />
				<Route path="/history" element={<History/>} />
            </Routes>
		</BrowserRouter>

		</>
	)
}

export default App;
