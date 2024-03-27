import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches3() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>3не выбран</Cell>}
      {addressDevice >= 64 && addressDevice <= 67 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 72 && addressDevice <= 75 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 80 && addressDevice <= 83 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 88 && addressDevice <= 91 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 96 && addressDevice <= 99 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 104 && addressDevice <= 107 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 112 && addressDevice <= 115 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 120 && addressDevice <= 123 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 68 && addressDevice <= 71 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 76 && addressDevice <= 79 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 84 && addressDevice <= 87 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 92 && addressDevice <= 95 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 100 && addressDevice <= 103 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 108 && addressDevice <= 111 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 116 && addressDevice <= 119 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 124 && addressDevice <= 127 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches3;
