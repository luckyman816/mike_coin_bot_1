import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./page/Home";
import Ranking from "./page/Ranking";
import Quest from "./page/Quest";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";
import Layout from "./Layout";
import Loading from "./component/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <div className="App w-[700px] h-[75vh] max-sm:w-[750px] max-sm:h-[70vh]">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="ranking" element={<Ranking />} />
              <Route path="quest" element={<Quest />} />
            </Route>
          </Routes>
          <ToastContainer />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;