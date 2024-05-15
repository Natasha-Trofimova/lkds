import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderV, SliderOn, SliderOff } = css;


function Switches4() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>4 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 39 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 55 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 40 && addressDevice <= 47 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 56 && addressDevice <= 63 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
    </>
  );
}

export default Switches4;
