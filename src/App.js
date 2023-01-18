import "./App.css";
import CityPage from "./components/pages/CityPage.js";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/pages/CountryPage";
import HotelPage from "./components/pages/HotelPage";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/location/:country/:city" element={<CityPage />} />
          <Route path="/location/:country" element={<CountryPage />} />
          <Route
            path="/location/:country/:city/:nameHotel"
            element={<HotelPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
