
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Repository from "./components/pages/Repository";
import About from "./components/pages/Repositories";
import ErrorPage from "./components/pages/ErrorPage";

import Navbar from "./components/Navbar";
// import Layout from "./components/Layout";
// import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repository" element={<Repository />} />
        <Route path="/Repositories" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Layout/> */}
      <Footer/>
    </div>
  );
};

export default App;
