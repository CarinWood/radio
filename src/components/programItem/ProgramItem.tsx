import { FC } from "react";
import "./programItem.css";
import { ProgramProps } from "../../types/Types";

const ProgramItem: FC<ProgramProps> = ({ name, img }) => {
  return (
    <div className="programItem-container">
      <img src={img} alt="name" className="program-item-img" />
      <div className="lower-programitem">
        <p className="name-frame">{name}</p>
      </div>
    </div>
  );
};

export default ProgramItem;
