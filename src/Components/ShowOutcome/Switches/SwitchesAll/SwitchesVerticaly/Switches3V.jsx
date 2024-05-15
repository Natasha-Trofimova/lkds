import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderV, SliderOn, SliderOff } = css;

function Switches3() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>3 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 35 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 40 && addressDevice <= 43 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 51 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 56 && addressDevice <= 59 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 36 && addressDevice <= 39 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 44 && addressDevice <= 47 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 52 && addressDevice <= 55 && <SliderOn> <SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 60 && addressDevice <= 63 && <SliderOn> <SliderV>1</SliderV></SliderOn>}

    </>
  );
}

export default Switches3;
