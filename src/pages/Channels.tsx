import { FC } from "react";
import "../styles/channels.css";
import { AllChannelsProps } from "../types/Types";

const Channels: FC<AllChannelsProps> = ({
  p1,
  p2,
  p3,
  p4Blekinge,
  p4Dalarna,
  p4Gotland,
  p4Gavleborg,
  p4Goteborg,
  p4Halland,
  p4Jamtland
}) => {
  return (
    <div className="channels-container">
      {p1.name}
      {p2.name}
      {p3.name}
      {p4Blekinge.name}
      {p4Dalarna.name}
      {p4Gotland.name}
      {p4Gavleborg.name}
      {p4Goteborg.name}
      {p4Halland.name}
      {p4Jamtland.name}
    </div>
  );
};

export default Channels;
