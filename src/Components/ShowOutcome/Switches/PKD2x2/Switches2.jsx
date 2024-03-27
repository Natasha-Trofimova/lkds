import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";

const { Cell, Slider, SliderOn, SliderOff } = css;

function Switches2() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      {addressDevice == "" && <Cell>2не выбран</Cell>}
      {addressDevice >= 64 && addressDevice <= 65 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 68 && addressDevice <= 69 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 72 && addressDevice <= 73 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 76 && addressDevice <= 77 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 80 && addressDevice <= 81 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 84 && addressDevice <= 85 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 88 && addressDevice <= 89 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 92 && addressDevice <= 93 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 96 && addressDevice <= 97 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 100 && addressDevice <= 101 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 104 && addressDevice <= 105 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 108 && addressDevice <= 109 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 112 && addressDevice <= 113 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 116 && addressDevice <= 117 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 120 && addressDevice <= 121 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 124 && addressDevice <= 125 && <SliderOff><Slider>0</Slider></SliderOff>}

      {addressDevice >= 66 && addressDevice <= 67 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 70 && addressDevice <= 71 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 74 && addressDevice <= 75 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 78 && addressDevice <= 79 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 82 && addressDevice <= 83 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 86 && addressDevice <= 87 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 90 && addressDevice <= 91 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 94 && addressDevice <= 95 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 98 && addressDevice <= 99 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 102 && addressDevice <= 103 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 106 && addressDevice <= 107 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 110 && addressDevice <= 111 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 114 && addressDevice <= 115 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 118 && addressDevice <= 119 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 122 && addressDevice <= 123 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 126 && addressDevice <= 127 && <SliderOn><Slider>1</Slider></SliderOn>}
    </>
  );
}

export default Switches2;
