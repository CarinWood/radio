import "./channelItem.css";
import { ChannelProps } from "../../types/Types";
import { FC } from "react";

const ChanelItem: FC<ChannelProps> = ({ name, img }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={img} alt={name} />
    </div>
  );
};

export default ChanelItem;
