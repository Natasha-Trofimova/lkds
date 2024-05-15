import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, SliderOn, SliderOff, SliderV, Slider } = css;

function Switches1() {
  const { addressDevice } = useContext(Device);
  const {nameDevice} = useContext(Device);

  return (
    <>
      {addressDevice === "" && <Cell>1 не выбран</Cell>}
    {/* горизонт
    'АЛИ-2'
    'ПКД 2х2'
    'ПКД 2х16'
    'ModBUS'
    'АПИ-1'
    */}
      {/* {nameDevice === 'АПУ-2Н' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><SliderV>0</SliderV></SliderOff>} */}
      {/* {nameDevice === 'АПУ-2Н' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><SliderV>0</SliderV></SliderOn>} */}

      {/* {nameDevice === 'АЗО-1' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><SliderV>0</SliderV></SliderOff>} */}
      {/* {nameDevice === 'АЗО-1' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><SliderV>0</SliderV></SliderOn>} */}

      {nameDevice === 'АЛИ-2' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOff><Slider>0</Slider></SliderOff>}
      {nameDevice === 'АЛИ-2' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOn><Slider>1</Slider></SliderOn>}

      {nameDevice === 'ПКД 2х2' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><Slider>0</Slider></SliderOff>}
      {nameDevice === 'ПКД 2х2' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><Slider>1</Slider></SliderOn>}

      {nameDevice === 'ПКД 2х16' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><Slider>0</Slider></SliderOff>}
      {nameDevice === 'ПКД 2х16' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><Slider>1</Slider></SliderOn>}

      {nameDevice === 'ModBUS' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><Slider>0</Slider></SliderOff>}
      {nameDevice === 'ModBUS' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><Slider>1</Slider></SliderOn>}

      {nameDevice === 'АПИ-1' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><Slider>0</Slider></SliderOff>}
      {nameDevice === 'АПИ-1' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><Slider>1</Slider></SliderOn>}


      {/* {addressDevice % 2 === 0 && addressDevice !== "" && <SliderOff><Slider>0</Slider></SliderOff>} */}
      {/* {addressDevice % 2 === 1 && <SliderOn><Slider>1</Slider></SliderOn>} */}

      {/* для вертикальных
      'АТУ8х2'
      'АРВ8х6'
      'АСК-16'
      'АТС4х4'
      */}
      {nameDevice === 'АТУ8х2' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {nameDevice === 'АТУ8х2' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><SliderV>1</SliderV></SliderOn>}

      {nameDevice === 'АРВ8х6' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {nameDevice === 'АРВ8х6' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><SliderV>1</SliderV></SliderOn>}

      {nameDevice === 'АСК-16' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {nameDevice === 'АСК-16' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><SliderV>1</SliderV></SliderOn>}

      {nameDevice === 'АТС4х4' && nameDevice !== "" && addressDevice % 2 === 0 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {nameDevice === 'АТС4х4' && nameDevice !== "" && addressDevice % 2 === 1 && <SliderOn><SliderV>1</SliderV></SliderOn>}
    </>
  );
}

export default Switches1;
