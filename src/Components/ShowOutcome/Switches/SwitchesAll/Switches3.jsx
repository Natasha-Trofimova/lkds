import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches3() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>3 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 35 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 40 && addressDevice <= 43 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 51 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 56 && addressDevice <= 59 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 36 && addressDevice <= 39 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 44 && addressDevice <= 47 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 52 && addressDevice <= 55 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 60 && addressDevice <= 63 && <SliderOn><Slider>1</Slider></SliderOn>}

      {addressDevice >= 188 && addressDevice <= 191 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 196 && addressDevice <= 199 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 204 && addressDevice <= 207 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 212 && addressDevice <= 215 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 220 && addressDevice <= 223 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 228 && addressDevice <= 231 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 236 && addressDevice <= 239 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 244 && addressDevice <= 247 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 192 && addressDevice <= 195 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 200 && addressDevice <= 203 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 208 && addressDevice <= 211 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 216 && addressDevice <= 219 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 224 && addressDevice <= 227 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 232 && addressDevice <= 235 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 240 && addressDevice <= 243 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 248 && addressDevice <= 251 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches3;
