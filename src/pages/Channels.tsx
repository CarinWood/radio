import { FC } from "react";
import "../styles/channels.css";
import { AllChannelsProps } from "../types/Types";
import ChanelItem from '../components/chanelItem/ChannelItem'

const Channels: FC<AllChannelsProps> = ({
  channels
}) => {
  return (
    <div className="channels-container">
     {channels.map((channel, i) => {
      return <div key={i}><ChanelItem name={channel.name} img={channel.image}/> </div>
     })}
    </div>
  );
};

export default Channels;
