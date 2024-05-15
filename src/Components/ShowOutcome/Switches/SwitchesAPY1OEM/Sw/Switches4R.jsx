import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderOn, SliderOff, SliderV} = css;

function Switches4R() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>4 не выбран</Cell>}
      {addressDevice >= 188 && addressDevice <= 195 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 211 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 227 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 236 && addressDevice <= 243 && <SliderOn><SliderV>1</SliderV></SliderOn>}

      {addressDevice >= 212 && addressDevice <= 219 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 228 && addressDevice <= 235 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 244 && addressDevice <= 251 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 196 && addressDevice <= 203 && <SliderOff><SliderV>0</SliderV></SliderOff>}
    </>
  );
}
export default Switches4R;
