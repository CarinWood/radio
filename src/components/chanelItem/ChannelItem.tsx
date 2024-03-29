import "./channelItem.css";
import { ChannelProps } from "../../types/Types";
import { FC } from "react";
import { IoIosPlay } from "react-icons/io";

const ChanelItem: FC<ChannelProps> = ({ name, img, startRadio }) => {
 

  return (
    <div className="channel-item">
      <img src={img} alt={name} className="_image" />
      <div className="bottom-part">
        <p className="channel-item-name">{name}</p>
        <p className="listen-now"onClick={() => startRadio(name)}>
          Lyssna nu
          <IoIosPlay className="play-arrow" />
        </p>
      </div>
    </div>
  );
};

export default ChanelItem;
