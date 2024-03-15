import Login from "./pages/login";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Alerts from "./pages/alerts";
import History from "./pages/history";
import Header from "./components/header";


function App() {
	return (
		<>
		<BrowserRouter>
		{/* <Header/> */}
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
				<Route path="/alerts" element={<Alerts />} />
				<Route path="/signin" element={<Login />} />

				<Route path="/history" element={<History/>} />
            </Routes>
		</BrowserRouter>

		</>
	)
}

export default App;
