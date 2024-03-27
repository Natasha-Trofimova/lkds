import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from "../SwitchesAll/Switches2";
import Switches3 from "../SwitchesAll/Switches3";
import Switches4 from "../SwitchesAll/Switches4";
import Switches5 from "../SwitchesAll/Switches5";

import css from "../../Styled.css";

const { TableVerticallyCSS, CellVertically, DlineCSS2, Cell } = css;

import { useContext } from "react";
import { Device } from "../../../../Context/Device";

function TableLineATY8x2() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      <TableVerticallyCSS>
      {addressDevice === "" && <CellVertically>адрес для данного устройства не выбран</CellVertically>}
      {addressDevice < 32 &&  addressDevice !== "" &&<CellVertically>адрес для данного устройства не выбран</CellVertically>}
      {addressDevice > 63 && <CellVertically>адрес для данного устройства не выбран</CellVertically>}
        {addressDevice !== "" && 
        addressDevice >= 32 &&
        addressDevice <= 63 &&(
          <>
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
          </>
        )}
      </TableVerticallyCSS>
    </>
  );
}

export default TableLineATY8x2;
