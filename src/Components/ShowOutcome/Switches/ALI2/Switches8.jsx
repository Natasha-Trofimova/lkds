import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches8() {
  const { switches8 } = useContext(Device);

  return (
    <>
      {switches8 == "" && <Cell>8 не выбран</Cell>}
      {switches8 === "1" && <SliderOn><Slider>1</Slider></SliderOn>}
      {switches8 === "0" && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  );
}

export default Switches8;
