import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches7() {
  const { switches7 } = useContext(Device);

  return (
    <>
      {switches7 == "" && <Cell>7 не выбран</Cell>}
      {switches7 === "1" && <SliderOn><Slider>1</Slider></SliderOn>}
      {switches7 === "0" && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  );
}

export default Switches7;
