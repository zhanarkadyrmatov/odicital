import "./App.css";
import Home from "./page/Home";
import Main from "./page/main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Page /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
