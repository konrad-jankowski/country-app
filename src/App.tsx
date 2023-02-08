import Navbar from "./components/Navbar";
import SingleCountry from "./pages/SingleCountry";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country/:countryName" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
