import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "./Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches1() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {/* первый дип переключатель
              // const { Cell, Slider, SliderOn, SliderOff } = css;
        <SliderOn>
          <Slider>1</Slider>
        </SliderOn>
      //   <SliderOff>
      //   <Slider>0</Slider>
      // </SliderOff>
      */}
      {addressDevice === "" && <Cell>1 не выбран</Cell>}
      {addressDevice % 2 === 0 && addressDevice !== "" && 
      // <Cell>1вниз(0)</Cell>
      <SliderOff>
        <Slider>0</Slider>
      </SliderOff>
      }
      {addressDevice % 2 === 1 && 
      // <Cell>1вверх(1)</Cell>
        <SliderOn>
          <Slider>1</Slider>
        </SliderOn>
      }
    </>
  );
}

export default Switches1;
