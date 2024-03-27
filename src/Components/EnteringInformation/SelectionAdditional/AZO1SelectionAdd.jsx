import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Device } from "../../../Context/Device";
import { useContext, useState } from "react";

import css from "./Styled.css";
const { AdditionalCSS } = css;

function AZO1SelectionAdd() {
  // 7 и 8 переключатель AZO1
  // Switches7 AZO1
  const { switches7 } = useState();
  const { toggleSwitches7 } = useContext(Device);
  const { switches8 } = useState();
  const { toggleSwitches8 } = useContext(Device);
  // Switches8 AZO1
  // «0» – Вкл.
  // «1» – Выкл.

  return (
    <>
      <AdditionalCSS>
        <FormControl>
          <FormLabel>
            {/* 7 */}
            Трансляция оповещения с УП 7.2 «Кабина»:
          </FormLabel>
          <RadioGroup
            value={switches7}
            onChange={(event) => {
              toggleSwitches7(event.target.value);
            }}
            row
          >
            <FormControlLabel value="0" control={<Radio />} label="Вкл" />
            <FormControlLabel value="1" control={<Radio />} label="Выкл" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>
            {/* 8 */}
            Трансляция оповещения с УП 7.2 «Приямок»:
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

export default AZO1SelectionAdd;
