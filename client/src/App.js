import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DataView from "./pages/DataView/DataView";
import MapView from "./pages/MapView/MapView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/data-view/:id" element={<DataView />} />
          <Route path="/map-view/:id" element={<MapView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
