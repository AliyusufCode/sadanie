import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import OpennedCart from "./Components/Upload/Openned";
import { useLocation } from "react-router-dom";
import Result from "./Components/Result/Result";
import LogIn from "./Components/Log in/LogIn";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  return (
    <div className="App">
      {location.pathname === "/" && <Header click={click} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<OpennedCart />} />
        <Route path="/upload/result" element={<Result />} />
        <Route path="/log-in" element={<LogIn setClick={setClick} />} />
      </Routes>
      {location.pathname === "/" && <Footer />}
    </div>
  );
}

export default App;
