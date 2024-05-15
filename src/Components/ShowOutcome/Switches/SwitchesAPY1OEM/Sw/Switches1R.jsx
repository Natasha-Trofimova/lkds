import { useContext } from "react";
import { Device } from "../../../../../Context/Device";
import css from "../../../Styled.css";

const { Cell, SliderOn, SliderOff, SliderV} = css;

function Switches1R() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      {addressDevice === "" && <Cell>1 не выбран</Cell>}
      {addressDevice % 2 === 0 && addressDevice !== "" && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice % 2 === 1 && <SliderOff><SliderV>0</SliderV></SliderOff>}
    </>
  );
}

export default Switches1R;
