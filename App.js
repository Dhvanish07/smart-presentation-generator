
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/index";  // ✅ Check if the path is correct
import Search from "./components/seach";
import Theme from "./components/theme";
import Category from "./components/category";
import Final from "./components/final";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/category" element={<Category />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;

