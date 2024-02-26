import { FC } from "react";
import "./channel.css";

type channelProps = {
  src: string,
  name: string
}

const Channel:FC<channelProps> = ({src, name}) => {
  return (
  <div>
    <img src={src} alt={name} className="channel-image" /> 
  </div>)
};

export default Channel;
