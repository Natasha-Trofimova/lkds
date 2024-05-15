import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderOn, SliderOff, SliderV } = css;

function Switches6() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>6не выбран</Cell>}
      {addressDevice >= 188 && addressDevice <= 219 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 251 && <SliderOff><SliderV>0</SliderV></SliderOff>}
    </>
  );
}
export default Switches6;
