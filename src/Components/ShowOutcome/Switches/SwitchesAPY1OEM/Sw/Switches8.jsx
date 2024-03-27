import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Slider, SliderOn, SliderOff, CellVertically2 } = css;

function Switches8() {
  const { switches8 } = useContext(Device);
  return (
    <>
      {switches8 == "" && <CellVertically2>не выбран</CellVertically2>}
      {switches8 === "1" && <SliderOn><Slider>1 </Slider></SliderOn>}
      {switches8 === "0" && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  );
}
export default Switches8;
