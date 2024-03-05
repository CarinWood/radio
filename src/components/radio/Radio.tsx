import { FC } from "react";
import "./radio.css";
import { RadioNowProps } from "../../types/Types";
import { IoCloseSharp } from "react-icons/io5";

const Radio: FC<RadioNowProps> = ({ radioNow, isHideRadio, hideRadio}) => {
  

  const closeRadio = () => {
    isHideRadio(true)
  }

  return (
    <section className={hideRadio ? "audio-section hide": "audio-section"}>
      <div className={hideRadio ? "exit hide" : "exit"} onClick={closeRadio}>
        <IoCloseSharp className="close" />
      </div>
      <audio controls key={radioNow} autoPlay>
        <source src={radioNow} type="audio/mpeg" />
      </audio>
    </section>
  );
};

export default Radio;
