import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;


function Switches4() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>4 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 39 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 55 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 40 && addressDevice <= 47 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 56 && addressDevice <= 63 && <SliderOn><Slider>1</Slider></SliderOn>}

      {addressDevice >= 188 && addressDevice <= 195 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 204 && addressDevice <= 211 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 220 && addressDevice <= 227 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 236 && addressDevice <= 243 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 196 && addressDevice <= 203 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 212 && addressDevice <= 219 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 228 && addressDevice <= 235 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 244 && addressDevice <= 251 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches4;
