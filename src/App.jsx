import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Keep your Navbar
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar /> {/* ✅ Keep the Navbar at the top */}
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;