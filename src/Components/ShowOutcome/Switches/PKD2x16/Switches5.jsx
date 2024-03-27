import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches5() {
  const { switches8 } = useContext(Device);

  return (
    <>
      {switches8 === "" && <Cell>5не выбран</Cell>}
      {switches8 === "1" && <SliderOn><Slider>1</Slider></SliderOn>}
      {switches8 === "0" && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  );
}

export default Switches5;