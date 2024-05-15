import Switches1 from '../SwitchesAll/Switches1'
import Switches2 from '../SwitchesAll/Switches2'
import Switches3 from '../SwitchesAll/Switches3'
import Switches4 from '../SwitchesAll/Switches4'
import Switches5 from '../SwitchesAll/Switches5'
import { useContext } from "react";
import { Device } from "../../../../Context/Device";

import css from '../../Styled.css'
const { TableCSS, DlineCSS1, DlineCSS2, Cell, TableCSS1, Celltxt } = css

function TableLineModBUS() {
const { addressDevice } = useContext(Device);
return (
  <>
  <TableCSS1>
      {addressDevice === "" && addressDevice < 32 && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
      {addressDevice > 63 && <Celltxt>Адрес для данного устройства не выбран</Celltxt>}
      {addressDevice !== "" && addressDevice >= 32 && addressDevice <= 63 && (
        <>
    <TableCSS>
          <DlineCSS1>
        <Cell>A0</Cell>
        <Cell>A1</Cell>
        <Cell>A2</Cell>
        <Cell>A3</Cell>
        <Cell>A4</Cell>
          </DlineCSS1>
        <Cell>ON DIP (1)</Cell> 
          <DlineCSS2>
        <Switches1 />
        <Switches2 />
        <Switches3 />
        <Switches4 />
        <Switches5 />
          </DlineCSS2>
          <Cell>OFF DIP (0)</Cell>
    </TableCSS>
        </>
      )}
  </TableCSS1>
  </>
);
}

export default TableLineModBUS 