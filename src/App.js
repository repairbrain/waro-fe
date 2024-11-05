import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BandsList from "./pages/BandsList";
import MusiciansList from "./pages/MusiciansList";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<BandsList />} />
          <Route path="/musicians" element={<MusiciansList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
