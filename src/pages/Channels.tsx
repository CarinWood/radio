import { FC } from "react";
import "../styles/channels.css";
import { AllChannelsProps } from "../types/Types";

const Channels: FC<AllChannelsProps> = ({
  channels
}) => {
  return (
    <div className="channels-container">
     {channels.map((channel, i) => {
      return <div key={i}>{channel.name}</div>
     })}
    </div>
  );
};

export default Channels;
