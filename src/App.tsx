import Login from "./pages/signin";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from "./pages/alerts";
import History from "./pages/history";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alert" element={<Alerts />} />
          <Route path="/history" element={<History />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
