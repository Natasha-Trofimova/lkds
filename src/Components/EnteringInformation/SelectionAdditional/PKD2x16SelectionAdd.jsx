import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Device } from "../../../Context/Device";
import { useContext, useState } from "react";

import css from "./Styled.css";
const { AdditionalCSS } = css;

function PKD2x16SelectionAdd() {
  const { switches8 } = useState();
  const { toggleSwitches8 } = useContext(Device);

  return (
    <>
      <AdditionalCSS>
        <FormControl>
          <FormLabel>
            Тип устройства:
          </FormLabel>
          <RadioGroup
            value={switches8}
            onChange={(event) => {
              toggleSwitches8(event.target.value);
            }}
            row
          >
            <FormControlLabel value="0" control={<Radio />} label="Ведомый" />
            <FormControlLabel value="1" control={<Radio />} label="Ведущий" />
          </RadioGroup>
        </FormControl>
      </AdditionalCSS>
    </>
  );
}

export default PKD2x16SelectionAdd;
