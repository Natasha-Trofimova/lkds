import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches1() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {/* первый дип переключатель*/}

      {addressDevice === "" && <Cell>1 не выбран</Cell>}
      {addressDevice % 2 === 0 && addressDevice !== "" && (
        <SliderOn>
          <Slider>1</Slider>
        </SliderOn>)}
      {
        addressDevice % 2 === 1 && (
          <SliderOff>
            <Slider>0</Slider>
          </SliderOff>
        )
      }
    </>
  );
}

export default Switches1;
