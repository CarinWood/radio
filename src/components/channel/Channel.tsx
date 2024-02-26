import { FC } from "react";
import "./channel.css";

type channelProps = {
  src: string;
  name: string;
  startRadio: (name: string) => void;
};

const Channel: FC<channelProps> = ({ src, name, startRadio }) => {
  return (
    <div onClick={() => startRadio(name)}>
      <img src={src} alt={name} className="channel-image" />
    </div>
  );
};

export default Channel;
