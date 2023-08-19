import "./App.css";
import Page from "./page/page";
import Main from "./page/main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Page /> */}
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
