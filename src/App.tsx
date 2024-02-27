import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./pages/Home";
import "./styles/app.css";
import Channels from "./pages/Channels";

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kanaler" element={<Channels/>}/>
      </Routes>
    </div>
  );
}
