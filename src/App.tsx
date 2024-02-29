import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./pages/Home";
import "./styles/app.css";
import Channels from "./pages/Channels";
import { useEffect, useState } from "react";
import { RadioItem } from "./types/Types";
import Radio from "./components/radio/Radio";
import Program from "./pages/Program";

export function App() {
  const [channels, setChannels] = useState<Array<RadioItem>>([]);
  const [p1, setP1] = useState<RadioItem>({} as RadioItem);
  const [p2, setP2] = useState<RadioItem>({} as RadioItem);
  const [p3, setP3] = useState<RadioItem>({} as RadioItem);
  const [radioNow, setRadioNow] = useState("");

  async function getPrograms() {
    const response = await fetch(
      "http://api.sr.se/api/v2/channels?format=json"
    );
    const data = await response.json();
    setChannels(data.channels.slice(0, 10));
    setP1(data.channels[0]);
    setP2(data.channels[1]);
    setP3(data.channels[2]);
  }

  useEffect(() => {
    getPrograms();
  }, []);

  function startRadio(name: string) {
    if (name === "P1") {
      setRadioNow(channels[0].liveaudio.url);
    } else if (name === "P2") {
      setRadioNow(channels[1].liveaudio.url);
    } else if (name === "P3") {
      setRadioNow(channels[2].liveaudio.url);
    } else if (name === "P4 Blekinge") {
      setRadioNow(channels[3].liveaudio.url);
    } else if (name === "P4 Dalarna") {
      setRadioNow(channels[4].liveaudio.url);
    } else if (name === "P4 Gotland") {
      setRadioNow(channels[5].liveaudio.url);
    } else if (name === "P4 Gävleborg") {
      setRadioNow(channels[6].liveaudio.url);
    } else if (name === "P4 Göteborg") {
      setRadioNow(channels[7].liveaudio.url);
    } else if (name === "P4 Halland") {
      setRadioNow(channels[8].liveaudio.url);
    } else {
      setRadioNow(channels[9].liveaudio.url);
    }
  }

  return (
    <div>
      <Header />
      <Radio radioNow={radioNow} />
      <Routes>
        <Route
          path="/"
          element={<Home p1={p1} p2={p2} p3={p3} startRadio={startRadio} />}
        />
        <Route
          path="/kanaler"
          element={<Channels channels={channels} startRadio={startRadio} />}
        />
        <Route
          path="/program"
          element={<Program/>}
        />
      </Routes>
    </div>
  );
}
