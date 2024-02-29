import { FC } from "react";
import "../styles/channels.css";
import { AllChannelsProps } from "../types/Types";
import ChanelItem from '../components/chanelItem/ChannelItem'

const Channels: FC<AllChannelsProps> = ({
  channels,
  startRadio
}) => {




  return (
    <div className="channels-container">
      <div className="channel-box">
     {channels.map((channel, i) => {
      return <div key={i}><ChanelItem name={channel.name} img={channel.image} startRadio={startRadio}/> </div>
     })}
     </div>
    </div>
  );
};

export default Channels;
