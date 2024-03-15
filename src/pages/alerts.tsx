import Popup from "../components/Popup";
import { useState } from "react";
const Alerts = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div>
      <button onClick={() => setButtonPopUp(true)}>Click for a popup</button>
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        <h3>Pop Up</h3>
      </Popup>
    </div>
  );
};

export default Alerts;
