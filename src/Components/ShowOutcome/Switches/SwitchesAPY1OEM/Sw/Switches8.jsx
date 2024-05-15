import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { SliderV, SliderOn, SliderOff, CellVertically2 } = css;

function Switches8() {
  const { switches8 } = useContext(Device);
  return (
    <>
      {switches8 == "" && <CellVertically2>не выбран</CellVertically2>}
      {switches8 === "1" && <SliderOn><SliderV>1 </SliderV></SliderOn>}
      {switches8 === "0" && <SliderOff><SliderV>0</SliderV></SliderOff>}
    </>
  );
}
export default Switches8;
