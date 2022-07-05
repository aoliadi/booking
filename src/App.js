import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotels/Hotel";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<Hotel />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
