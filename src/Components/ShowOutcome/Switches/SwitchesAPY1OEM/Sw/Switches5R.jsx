import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderOn, SliderOff, SliderV} = css;

function Switches5R() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>5 не выбран</Cell>}
      {addressDevice >= 188 && addressDevice <= 203 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 235 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 219 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 236 && addressDevice <= 251 && <SliderOff><SliderV>0</SliderV></SliderOff>}
    </>
  );
}
export default Switches5R;
