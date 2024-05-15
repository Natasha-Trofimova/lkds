import { useContext } from "react"
import { Device } from "../../../../../Context/Device"
import css from "../../../Styled.css";
const { Cell, SliderOn, SliderOff, SliderV} = css;


function Switches2R() {
  const { addressDevice } = useContext(Device)
  return (
    <>
      {addressDevice == '' && <Cell>2 не выбран</Cell>}

      {addressDevice >= 188 && addressDevice <= 189 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 192 && addressDevice <= 193 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 196 && addressDevice <= 197 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 200 && addressDevice <= 201 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 204 && addressDevice <= 205 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 208 && addressDevice <= 209 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 212 && addressDevice <= 213 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 216 && addressDevice <= 217 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 220 && addressDevice <= 221 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 224 && addressDevice <= 225 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 228 && addressDevice <= 229 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 232 && addressDevice <= 233 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 336 && addressDevice <= 337 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 240 && addressDevice <= 241 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 244 && addressDevice <= 245 && <SliderOn><SliderV>1</SliderV></SliderOn>}
      {addressDevice >= 248 && addressDevice <= 249 && <SliderOn><SliderV>1</SliderV></SliderOn>}

      {addressDevice >= 190 && addressDevice <= 191 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 194 && addressDevice <= 195 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 198 && addressDevice <= 199 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 202 && addressDevice <= 203 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 206 && addressDevice <= 207 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 210 && addressDevice <= 211 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 214 && addressDevice <= 215 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 218 && addressDevice <= 219 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 222 && addressDevice <= 223 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 226 && addressDevice <= 227 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 230 && addressDevice <= 231 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 234 && addressDevice <= 235 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 238 && addressDevice <= 239 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 242 && addressDevice <= 243 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 246 && addressDevice <= 247 && <SliderOff><SliderV>0</SliderV></SliderOff>}
      {addressDevice >= 250 && addressDevice <= 251 && <SliderOff><SliderV>0</SliderV></SliderOff>}
    </>
  )
}

export default Switches2R
