import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BandsList from "./pages/BandsList";
import MusiciansList from "./pages/MusiciansList";
import AddBand from "./pages/AddBand";
import AddMusician from "./pages/AddMusician";
import EditMusician from "./pages/EditMusician";
import EditBand from "./pages/EditBand";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<BandsList />} />
          <Route path="/add-band" element={<AddBand />} />
          <Route path="/edit-band/:id" element={<EditBand />} />
          <Route path="/musicians" element={<MusiciansList />} />
          <Route path="/add-musician" element={<AddMusician />} />
          <Route path="/edit-musician/:id" element={<EditMusician />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
