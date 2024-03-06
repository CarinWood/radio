import Channel from "../components/channel/Channel";
import "../styles/home.css";
import { FC } from "react";
import { RadioProps } from "../types/Types";

export const Home: FC<RadioProps> = ({ p1, p2, p3, p4, startRadio }) => {
  return (
    <div className="home-container">
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
          {p4 && (
            <Channel src={p4.image} name={p4.name} startRadio={startRadio} />
          )}
        </article>
      </section>
    </div>
  );
};
