import { FC } from "react";
import "./programItem.css";
import { ProgramProps } from "../../types/Types";

const ProgramItem: FC<ProgramProps> = ({ name, img, description, url }) => {
  return (
    <div className="programItem-container">
      <a href={url} target="_blank">
        <img src={img} alt="name" className="program-item-img" />
      </a>
      <div className="lower-programitem">
        <p className="name-frame">{name}</p>
        <p className="programitem-desc">{description}</p>
      </div>
    </div>
  );
};

export default ProgramItem;
