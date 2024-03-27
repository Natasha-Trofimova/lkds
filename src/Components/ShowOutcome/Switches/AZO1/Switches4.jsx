import { useContext } from "react"
import { Device } from "../../../../Context/Device"
import css from '../../Styled.css'

const { Cell, Slider, SliderOn, SliderOff } = css;


function Switches4() {

  const { addressDevice } = useContext(Device)

  return (
    <>
    {addressDevice == '' && <Cell>4не выбран</Cell>}
      {addressDevice >= 188 && addressDevice <= 195 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 211 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 227 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 236 && addressDevice <= 243 && <SliderOn><Slider>1</Slider></SliderOn>}

      {addressDevice >= 196 && addressDevice <= 203 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 212 && addressDevice <= 219 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 228 && addressDevice <= 235 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 244 && addressDevice <= 251 && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  )
}

export default Switches4
