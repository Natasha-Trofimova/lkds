import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches5() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>5не выбран</Cell>}
      {addressDevice >= 64 && addressDevice <= 79 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 96 && addressDevice <= 111 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 80 && addressDevice <= 95 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 112 && addressDevice <= 127 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches5;
