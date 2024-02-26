import Channel from "../components/channel/Channel";
import "../styles/home.css";
import { useEffect, useState } from "react";

export const Home = () => {
  const [p1, setP1] = useState();
  const [p2, setP2] = useState();
  const [p3, setP3] = useState();

  async function getPrograms() {
    const response = await fetch(
      "http://api.sr.se/api/v2/channels?format=json"
    );
    const data = await response.json();
    setP1(data.channels[0]);
    setP2(data.channels[1]);
    setP3(data.channels[2]);
  }

  useEffect(() => {
    getPrograms();
  }, []);

  console.log(p1);

  return (
    <div>
      <section className="live">
        <p className="heading">Lyssna direkt</p>
        <article className="channels">
          {p1 && <Channel src={p1.image} name={p1.name} />}
          {p2 && <Channel src={p2.image} name={p2.name} />}
          {p3 && <Channel src={p3.image} name={p3.name} />}
        </article>
      </section>
    </div>
  );
};
