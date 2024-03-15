import React from "react";
import "./Popup.css";

interface PopupProps {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="cls-btn" onClick={() => props.setTrigger(false)}>
          done!
        </button>
        {props.children}
        <div className="popup-content"></div>
        <div className="popup-boxes">
          <div className="popup-box1"></div>
          <div className="popup-box2"></div>
          <div className="popup-box3"></div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
