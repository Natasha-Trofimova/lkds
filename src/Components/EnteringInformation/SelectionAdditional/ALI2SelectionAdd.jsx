import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Device } from "../../../Context/Device";
import { useContext, useState } from "react";

import css from "./Styled.css";
const { AdditionalCSS } = css;

function ALI2SelectionAdd() {
  // 7 и 8 переключатель ALI2
  // Switches7 ALI2
  const { switches7 } = useState();
  const { toggleSwitches7 } = useContext(Device);
  const { switches8 } = useState();
  const { toggleSwitches8 } = useContext(Device);
  // Switches8 ALI2
  // «0» – Вкл.
  // «1» – Выкл.
  // Switches7 ALI2
  // «0» – Пассивный.
  // «1» – Активный.
  return (
    <>
      <AdditionalCSS>
        <FormControl>
          <FormLabel>
            {/* 7 */}
            Режим работы:
          </FormLabel>
          <RadioGroup
            value={switches7}
            onChange={(event) => {
              toggleSwitches7(event.target.value);
            }}
            row
          >
            <FormControlLabel value="0" control={<Radio />} label="Пассивный" />
            <FormControlLabel value="1" control={<Radio />} label="Активный" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>
            {/* 8 */}
            Звуковая сигнализация:
          </FormLabel>
          <RadioGroup
            value={switches8}
            onChange={(event) => {
              toggleSwitches8(event.target.value);
            }}
            row
          >
            <FormControlLabel value="0" control={<Radio />} label="Вкл" />
            <FormControlLabel value="1" control={<Radio />} label="Выкл" />
          </RadioGroup>
        </FormControl>
      </AdditionalCSS>
    </>
  );
}

export default ALI2SelectionAdd;
