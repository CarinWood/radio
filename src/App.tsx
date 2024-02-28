import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./pages/Home";
import "./styles/app.css";
import Channels from "./pages/Channels";
import { useEffect, useState } from "react";
import { RadioItem } from "./types/Types";

export function App() {
  const [p1, setP1] = useState<RadioItem>({} as RadioItem);
  const [p2, setP2] = useState<RadioItem>({} as RadioItem);
  const [p3, setP3] = useState<RadioItem>({} as RadioItem);
  const [p4Blekinge, setP4Blekinge] = useState<RadioItem>({} as RadioItem);
  const [p4Dalarna, setP4Dalarna] = useState<RadioItem>({} as RadioItem);
  const [p4Gotland, setP4Gotland] = useState<RadioItem>({} as RadioItem);
  const [p4Gavleborg, setP4Gavleborg] = useState<RadioItem>({} as RadioItem);

  async function getPrograms() {
    const response = await fetch(
      "http://api.sr.se/api/v2/channels?format=json"
    );
    const data = await response.json();
    setP1(data.channels[0]);
    setP2(data.channels[1]);
    setP3(data.channels[2]);
    setP4Blekinge(data.channels[3]);
    setP4Dalarna(data.channels[4]);
    setP4Gotland(data.channels[5]);
    setP4Gavleborg(data.channels[6]);
  }

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home p1={p1} p2={p2} p3={p3} />} />
        <Route
          path="/kanaler"
          element={
            <Channels
              p1={p1}
              p2={p2}
              p3={p3}
              p4Blekinge={p4Blekinge}
              p4Dalarna={p4Dalarna}
              p4Gotland={p4Gotland}
              p4Gavleborg={p4Gavleborg}
            />
          }
        />
      </Routes>
    </div>
  );
}
