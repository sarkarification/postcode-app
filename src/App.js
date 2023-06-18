import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:postCode" element={<Details />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
