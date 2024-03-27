import { useContext, useState } from "react";
import { Device } from "../../../Context/Device";
import "./Sy.css";
import css from "./Styled.css";

const { DeviceSelectionB } = css;

// для остальных маленьких
function MiniInputAdddress() {
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
        placeholder="32-63"
        type="number"
        value={inputAddress}
        min="32"
        max="63"
        onChange={(event) => {
          setInputTest(event.target.value);
        }}
      />
      <DeviceSelectionB onClick={validation}>Выбрать</DeviceSelectionB>
    </>
  );
}

export default MiniInputAdddress;
