import { FC } from "react";
import "../styles/channels.css";
import { AllChannelsProps } from "../types/Types";

const Channels: FC<AllChannelsProps> = ({ p1, p2, p3, p4Blekinge }) => {
  return (
    <div className="channels-container">
      {p1.name}
      {p2.name}
      {p3.name}
      {p4Blekinge.name}
    </div>
  );
};

export default Channels;
