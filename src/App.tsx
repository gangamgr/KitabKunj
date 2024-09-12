import "./App.css";
import Home from "./Page/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./Page/About";
import New from "./Page/new";
// import call from "./Page/Shop/index"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<New />} />
          {/* <Route path="/shop" element={<call/>} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
