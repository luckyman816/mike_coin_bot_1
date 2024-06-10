import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Ranking from "./page/Ranking";
import Quest from "./page/Quest";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";
import Layout from "./Layout";
import Header from "./component/Header";

function App() {
  return (
    <Router>
      <div className="App" style={{display: 'flex', justifyContent: "center"}}>
        <div className=" w-[550px] h-[75vh] max-sm:w-[390px] max-sm:h-[840px]  ">
          <Header />
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
      </div>
    </Router>
  );
}

export default App;
