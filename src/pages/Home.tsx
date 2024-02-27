import Channel from "../components/channel/Channel";
import "../styles/home.css";
import { FC, useState } from "react";
import { RadioProps } from "../types/Types";



export const Home:FC<RadioProps> = ({p1, p2, p3}) => {
  const [radioNow, setRadioNow] = useState("");

  function startRadio(name: string) {
    if (name === "P1") {
      setRadioNow(p1.liveaudio.url);
    } else if (name === "P2") {
      setRadioNow(p2.liveaudio.url);
    } else {
      setRadioNow(p3.liveaudio.url);
    }
  }



  return (
    <div>
      <section className="live">
        <p className="heading">Lyssna direkt</p>
        <article className="channels">
          {p1 && (
            <Channel src={p1.image} name={p1.name} startRadio={startRadio} />
          )}
          {p2 && (
            <Channel src={p2.image} name={p2.name} startRadio={startRadio} />
          )}
          {p3 && (
            <Channel src={p3.image} name={p3.name} startRadio={startRadio} />
          )}
        </article>
      </section>
      <section className="audio-section">
        <audio controls key={radioNow} autoPlay>
          <source src={radioNow} type="audio/mpeg" />
        </audio>
      </section>
    </div>
  );
};
