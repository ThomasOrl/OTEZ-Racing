import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
