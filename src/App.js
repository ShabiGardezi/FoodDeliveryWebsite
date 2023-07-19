import Home from "./Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/menu" exact Component={Menu} />
        <Route path="/about" exact Component={About} />
        <Route path="/contact" exact Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
