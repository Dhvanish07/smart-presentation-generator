import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/index";
import Search from "./components/search";
import Theme from "./components/theme";
import Category from "./components/category";
import Final from "./components/final";
import Result from "./components/result";

const App = () => {
  // State to store user selections across pages
  const [presentationData, setPresentationData] = useState({
    topic: "",
    slides: "8-12",
    theme: "",
    category: "",
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/search"
          element={<Search presentationData={presentationData} setPresentationData={setPresentationData} />}
        />
        <Route
          path="/theme"
          element={<Theme presentationData={presentationData} setPresentationData={setPresentationData} />}
        />
        <Route
          path="/category"
          element={<Category presentationData={presentationData} setPresentationData={setPresentationData} />}
        />
        <Route
          path="/final"
          element={<Final presentationData={presentationData} />}
        />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
