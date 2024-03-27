import { useContext } from "react"
import { Device } from "../../../../../Context/Device"
import css from "../../../Styled.css";
const { Cell, Slider, SliderOn, SliderOff} = css;


function Switches2R() {
  const { addressDevice } = useContext(Device)
  return (
    <>
      {addressDevice == '' && <Cell>2 не выбран</Cell>}

      {addressDevice >= 188 && addressDevice <= 189 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 192 && addressDevice <= 193 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 196 && addressDevice <= 197 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 200 && addressDevice <= 201 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 205 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 208 && addressDevice <= 209 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 212 && addressDevice <= 213 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 216 && addressDevice <= 217 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 221 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 224 && addressDevice <= 225 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 228 && addressDevice <= 229 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 232 && addressDevice <= 233 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 336 && addressDevice <= 337 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 240 && addressDevice <= 241 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 244 && addressDevice <= 245 && <SliderOn><Slider>1</Slider></SliderOn>}
      {addressDevice >= 248 && addressDevice <= 249 && <SliderOn><Slider>1</Slider></SliderOn>}

      {addressDevice >= 190 && addressDevice <= 191 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 194 && addressDevice <= 195 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 198 && addressDevice <= 199 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 202 && addressDevice <= 203 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 206 && addressDevice <= 207 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 210 && addressDevice <= 211 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 214 && addressDevice <= 215 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 218 && addressDevice <= 219 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 222 && addressDevice <= 223 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 226 && addressDevice <= 227 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 230 && addressDevice <= 231 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 234 && addressDevice <= 235 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 238 && addressDevice <= 239 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 242 && addressDevice <= 243 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 246 && addressDevice <= 247 && <SliderOff><Slider>0</Slider></SliderOff>}
      {addressDevice >= 250 && addressDevice <= 251 && <SliderOff><Slider>0</Slider></SliderOff>}
    </>
  )
}

export default Switches2R
