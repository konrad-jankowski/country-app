import Navbar from "./components/Navbar";
import SingleCountry from "./pages/SingleCountry";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:alpha3Code" element={<SingleCountry />} />
      </Routes>
    </>
  );
}

export default App;
