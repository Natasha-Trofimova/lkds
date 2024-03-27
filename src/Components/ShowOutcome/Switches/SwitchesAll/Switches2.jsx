import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches2() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>2 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 33 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 36 && addressDevice <= 37 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 40 && addressDevice <= 41 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 44 && addressDevice <= 45 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 49 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 52 && addressDevice <= 53 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 56 && addressDevice <= 57 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 60 && addressDevice <= 61 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 34 && addressDevice <= 35 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 38 && addressDevice <= 39 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 42 && addressDevice <= 43 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 46 && addressDevice <= 47 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 50 && addressDevice <= 51 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 54 && addressDevice <= 55 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 58 && addressDevice <= 59 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 62 && addressDevice <= 63 && <SliderOn><Slider>1</Slider></SliderOn>}

      {addressDevice >= 188 && addressDevice <= 189 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 192 && addressDevice <= 193 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 196 && addressDevice <= 197 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 200 && addressDevice <= 201 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 204 && addressDevice <= 205 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 208 && addressDevice <= 209 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 212 && addressDevice <= 213 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 216 && addressDevice <= 217 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 220 && addressDevice <= 221 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 224 && addressDevice <= 225 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 228 && addressDevice <= 229 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 232 && addressDevice <= 233 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 336 && addressDevice <= 337 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 240 && addressDevice <= 241 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 244 && addressDevice <= 245 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 248 && addressDevice <= 249 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 190 && addressDevice <= 191 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 194 && addressDevice <= 195 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 198 && addressDevice <= 199 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 202 && addressDevice <= 203 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 206 && addressDevice <= 207 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 210 && addressDevice <= 211 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 214 && addressDevice <= 215 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 218 && addressDevice <= 219 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 222 && addressDevice <= 223 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 226 && addressDevice <= 227 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 230 && addressDevice <= 231 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 234 && addressDevice <= 235 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 238 && addressDevice <= 239 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 242 && addressDevice <= 243 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 246 && addressDevice <= 247 && <Cell>3вверх(1)</Cell>}
      {addressDevice >= 250 && addressDevice <= 251 && <Cell>3вверх(1)</Cell>}
    </>
  );
}

export default Switches2;
