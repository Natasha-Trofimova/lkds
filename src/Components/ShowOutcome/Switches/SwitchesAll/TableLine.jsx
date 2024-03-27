import Switches1 from "./Switches1";
import Switches2 from "./Switches2";
import Switches3 from "./Switches3";
import Switches4 from "./Switches4";
import Switches5 from "./Switches5";

import css from "../../Styled.css";

const { TableCSS, DlineCSS2, Cell } = css;

// TableLine
function SwitchesAll() {
  return (
    <>
      <TableCSS>
        <DlineCSS2>
          <Cell>A0</Cell>
          <Cell>A1</Cell>
          <Cell>A2</Cell>
          <Cell>A3</Cell>
          <Cell>A4</Cell>
        </DlineCSS2>

        <DlineCSS2>
          <Switches1 />
          <Switches2 />
          <Switches3 />
          <Switches4 />
          <Switches5 />
        </DlineCSS2>
      </TableCSS>
    </>
  );
}

export default SwitchesAll;
