import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from "../SwitchesAll/Switches2";
import Switches3 from "../SwitchesAll/Switches3";
import Switches4 from "../SwitchesAll/Switches4";
import Switches5 from "../SwitchesAll/Switches5";

import css from "../../Styled.css";

const { TableCSS, DlineCSS2, Cell } = css;

import { useContext } from "react";
import { Device } from "../../../../Context/Device";

function TableLineAPI1() {
  const { addressDevice } = useContext(Device);

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
        {addressDevice === "" && addressDevice < 32 && <Cell>адрес для данного устройства не выбран</Cell>}
        {addressDevice > 63 && <Cell>адрес для данного устройства не выбран</Cell>}

          {addressDevice !== "" && addressDevice >= 32 && addressDevice <= 63 && (
            <>
            <Cell>ON DIP</Cell> 
            <DlineCSS2>
              <Switches1 />
              <Switches2 />
              <Switches3 />
              <Switches4 />
              <Switches5 />
            </DlineCSS2>
            <Cell>OFF DIP</Cell>
          </>
        )}
      </TableCSS>
    </>
  );
}

export default TableLineAPI1;
