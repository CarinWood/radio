import { FC } from "react";
import "../styles/program.css";
import { programProps } from "../types/Types";

const Program: FC<programProps> = ({ p1 }) => {
  async function getPrograms(id: number) {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/programs/index?channelid=${id}&&format=json&&page=1&&size=10`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  getPrograms(p1);

  return (
    <div className="program-contianer">
      <div></div>
    </div>
  );
};

export default Program;
