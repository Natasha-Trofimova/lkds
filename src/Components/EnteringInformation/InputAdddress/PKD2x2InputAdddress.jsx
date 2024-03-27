import { useContext, useState } from "react";
import { Device } from "../../../Context/Device";
import PKD2x2SelectionAdd from "../SelectionAdditional/PKD2x2SelectionAdd";
import "./Sy.css";
import css from "./Styled.css";

const { DeviceSelectionB } = css;

function PKD2x2InputAdddress() {
  const [inputAddress] = useState();
  const [inputTest, setInputTest] = useState();

  const [, setAddressDevice] = useState("");
  const { toggleAddress } = useContext(Device);

  const validation = () => {
    if (inputTest) {
      console.log("input proshla");
      // запись имя в контекс
      setAddressDevice(inputTest);
      toggleAddress(inputTest);
    } else console.log(" ne proshla input");
  };

  return (
    <>
      <input
        className="inputCSS"
        placeholder="64-127"
        type="number"
        value={inputAddress}
        min="64"
        max="127"
        onChange={(event) => {
          setInputTest(event.target.value);
        }}
      />
      <DeviceSelectionB onClick={validation}>Выбрать</DeviceSelectionB>
      <PKD2x2SelectionAdd />
    </>
  );
}

export default PKD2x2InputAdddress;
