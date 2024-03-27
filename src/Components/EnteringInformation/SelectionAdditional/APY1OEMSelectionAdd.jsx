import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Device } from "../../../Context/Device";
import { useContext, useState } from "react";

import css from "./Styled.css";
const { AdditionalCSS } = css;

function APY1OEMSelectionAdd() {
  //  8 переключатель APY1OEM
  const { switches8 } = useState();
  const { toggleSwitches8 } = useContext(Device);
  // Switches8 APY1OEM
  // «0» – Вкл.
  // «1» – Выкл.

  return (
    <>
      <AdditionalCSS>
        <FormControl>
          <FormLabel>
            {/* 8 */}
            Подключение «Терминатор»:
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

export default APY1OEMSelectionAdd;
