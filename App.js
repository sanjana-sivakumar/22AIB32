import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Shorturl from "./pages/Shorturl";
import Static from "./pages/Static";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shorturl urls={urls} setUrls={setUrls} />} />
        <Route path="/stats/:shortcode" element={<Static urls={urls} />} />
        <Route path="/r/:shortcode" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
