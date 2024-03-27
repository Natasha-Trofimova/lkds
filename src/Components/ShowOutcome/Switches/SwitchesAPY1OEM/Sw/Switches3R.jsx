import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches3R() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>3 не выбран</Cell>}

      {addressDevice >= 188 && addressDevice <= 191 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 196 && addressDevice <= 199 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 207 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 212 && addressDevice <= 215 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 223 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 228 && addressDevice <= 231 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 236 && addressDevice <= 239 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 244 && addressDevice <= 247 && <SliderOn><Slider>1</Slider></SliderOn>}

      {addressDevice >= 192 && addressDevice <= 195 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 200 && addressDevice <= 203 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 208 && addressDevice <= 211 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 216 && addressDevice <= 219 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 224 && addressDevice <= 227 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 232 && addressDevice <= 235 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 240 && addressDevice <= 243 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 248 && addressDevice <= 251 && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  );
}
export default Switches3R;