import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;


function Switches6() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>6не выбран</Cell>}
      {addressDevice >= 64 && addressDevice <= 95 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 96 && addressDevice <= 127 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches6;
