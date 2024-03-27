import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches4() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>4не выбран</Cell>}
      {addressDevice >= 64 && addressDevice <= 71 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 80 && addressDevice <= 87 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 96 && addressDevice <= 103 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 112 && addressDevice <= 119 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 72 && addressDevice <= 79 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 88 && addressDevice <= 95 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 104 && addressDevice <= 111 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 120 && addressDevice <= 127 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches4;
