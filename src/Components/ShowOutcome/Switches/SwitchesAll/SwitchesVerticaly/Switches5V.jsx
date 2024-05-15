import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderV, SliderOn, SliderOff } = css;


function Switches5() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>5 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 47 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 63 && <SliderOn><SliderV>1</SliderV></SliderOn>}

    </>
  );
}

export default Switches5;
