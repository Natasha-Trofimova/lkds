import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Device } from '../../../Context/Device';
import { useContext, useState } from 'react';

import css from "./Styled.css";
const { AdditionalCSS } = css;

function PKD2x2SelectionAdd() {
  // APY2N
  // 7 и 8 переключатель 
  // Switches7 
  const { switches7 } = useState()
  const { toggleSwitches7 } = useContext(Device)
  const { switches8 } = useState()
  const { toggleSwitches8 } = useContext(Device)
  // Switches8 
  // «0» — DIP переключатель установлен влево
// «1» — DIP переключатель установлен вправо

  return (
    <>
      <AdditionalCSS>
        <FormControl>
          <FormLabel
          >
            {/* 7 */}
            тип использования:
          </FormLabel>
          <RadioGroup
            value={switches7}
            onChange={event => {
              toggleSwitches7(event.target.value)
            }}
            row
          >
            <FormControlLabel value="0" control={<Radio />} label="Защищенный" />
            <FormControlLabel value="1" control={<Radio />} label="Незащищенный" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel
          >
            {/* 8 */}
            тип устройства:
          </FormLabel>
          <RadioGroup
            value={switches8}
            onChange={event => {
              toggleSwitches8(event.target.value)
            }}
            row
          >
            <FormControlLabel value="0" control={<Radio />} label="Ведомый" />
            <FormControlLabel value="1" control={<Radio />} label="Ведущий" />
          </RadioGroup>
        </FormControl>
      </AdditionalCSS>
    </>
  )
}

export default PKD2x2SelectionAdd