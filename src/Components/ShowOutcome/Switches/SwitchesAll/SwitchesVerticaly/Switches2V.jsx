import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderOn, SliderOff, SliderV } = css;

function Switches2() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>2 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 33 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 36 && addressDevice <= 37 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 40 && addressDevice <= 41 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 44 && addressDevice <= 45 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 49 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 52 && addressDevice <= 53 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 56 && addressDevice <= 57 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 60 && addressDevice <= 61 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 34 && addressDevice <= 35 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 38 && addressDevice <= 39 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 42 && addressDevice <= 43 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 46 && addressDevice <= 47 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 50 && addressDevice <= 51 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 54 && addressDevice <= 55 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 58 && addressDevice <= 59 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 62 && addressDevice <= 63 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
    </>
  );
}

export default Switches2;
