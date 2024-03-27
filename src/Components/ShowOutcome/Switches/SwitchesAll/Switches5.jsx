import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;


function Switches5() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>5 не выбран</Cell>}
      {addressDevice >= 32 && addressDevice <= 47 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 48 && addressDevice <= 63 && <SliderOn><Slider>1</Slider></SliderOn>}
      {/* для 8 */}
      {addressDevice >= 188 && addressDevice <= 203 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 220 && addressDevice <= 235 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 204 && addressDevice <= 219 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 236 && addressDevice <= 251 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches5;
