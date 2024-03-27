import { useContext, useState } from "react";
import { Device } from "../../../Context/Device";
import ALI2SelectionAdd from "../SelectionAdditional/ALI2SelectionAdd";
import APY1OEMSelectionAdd from "../SelectionAdditional/APY1OEMSelectionAdd";
import APY2NSelectionAdd from "../SelectionAdditional/APY2NSelectionAdd";
import AZO1SelectionAdd from "../SelectionAdditional/AZO1SelectionAdd";
import "./Sy.css";
import css from "./Styled.css";

const { DeviceSelectionB } = css;
// для трех больших
function MaxInputAdddress() {
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

  const { nameDevice } = useContext(Device);

  return (
    <>
      <input
        className="inputCSS"
        type="number"
        placeholder="188-251"
        value={inputAddress}
        min="188"
        max="251"
        onChange={(event) => {
          setInputTest(event.target.value);
        }}
      />
      <DeviceSelectionB onClick={validation}>Выбрать</DeviceSelectionB>
      {nameDevice === "АПУ-2Н" && (<><APY2NSelectionAdd /></>)}
      {nameDevice === "АЗО-1" && (<><AZO1SelectionAdd /></>)}
      {nameDevice === "АПУ-1 ОЕМ" && (<><APY1OEMSelectionAdd /></>)}
      {nameDevice === "АЛИ-2" && (<><ALI2SelectionAdd /></>)}
    </>
  );
}

export default MaxInputAdddress;
