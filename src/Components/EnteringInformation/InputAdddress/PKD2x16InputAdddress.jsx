import { useContext, useState } from "react";
import { Device } from "../../../Context/Device";
import PKD2x16SelectionAdd from "../SelectionAdditional/PKD2x16SelectionAdd";
import "./Sy.css";
import css from "./Styled.css";

const { DeviceSelectionB } = css;

function PKD2x16InputAdddress() {
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
        placeholder="32-47"
        type="number"
        value={inputAddress}
        min="32"
        max="47"
        onChange={(event) => {
          setInputTest(event.target.value);
        }}
      />
      <DeviceSelectionB onClick={validation}>Выбрать</DeviceSelectionB>
      <PKD2x16SelectionAdd />
    </>
  );
}

export default PKD2x16InputAdddress;