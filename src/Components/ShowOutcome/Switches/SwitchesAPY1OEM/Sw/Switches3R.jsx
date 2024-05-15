import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderOn, SliderOff, SliderV} = css;

function Switches3R() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>3 не выбран</Cell>}

      {addressDevice >= 188 && addressDevice <= 191 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 196 && addressDevice <= 199 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 207 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 212 && addressDevice <= 215 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 223 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 228 && addressDevice <= 231 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 236 && addressDevice <= 239 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 244 && addressDevice <= 247 && <SliderOn><SliderV>1</SliderV></SliderOn>}

      {addressDevice >= 192 && addressDevice <= 195 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 200 && addressDevice <= 203 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 208 && addressDevice <= 211 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 216 && addressDevice <= 219 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 224 && addressDevice <= 227 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 232 && addressDevice <= 235 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 240 && addressDevice <= 243 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 248 && addressDevice <= 251 && <SliderOff><SliderV>0</SliderV></SliderOff>}
    </>
  );
}
export default Switches3R;