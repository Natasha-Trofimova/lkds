import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches6() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>6 не выбран</Cell>}
      {addressDevice >= 188 && addressDevice <= 219 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 220 && addressDevice <= 251 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches6;
