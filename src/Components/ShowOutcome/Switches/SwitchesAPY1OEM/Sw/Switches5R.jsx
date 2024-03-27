import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches5R() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice == "" && <Cell>5 не выбран</Cell>}
      {addressDevice >= 188 && addressDevice <= 203 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 235 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 219 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 236 && addressDevice <= 251 && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  );
}
export default Switches5R;
