import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from "../SwitchesAll/Switches2";
import Switches3 from "../SwitchesAll/Switches3";
import Switches4 from "../SwitchesAll/Switches4";
import Switches5 from "../SwitchesAll/Switches5";
import { useContext } from "react";
import { Device } from "../../../../Context/Device";

import css from "../../Styled.css";
const { TableCSS, TableCSS1, DlineCSS1, DlineCSS2, Cell,  Celltxt } = css

function TableLineAPI1() {
  const { addressDevice } = useContext(Device);

  return (
    <>
  <TableCSS1>
  {addressDevice === "" && addressDevice < 32 && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
  {addressDevice > 63 && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
  {addressDevice !== "" && addressDevice >= 32 && addressDevice <= 63 && 
  (<>
  <TableCSS>
    <DlineCSS1>
      <Cell>A0</Cell>
      <Cell>A1</Cell>
      <Cell>A2</Cell>
      <Cell>A3</Cell>
      <Cell>A4</Cell>
    </DlineCSS1>
      <Cell>ON DIP</Cell> 
    <DlineCSS2>
      <Switches1 />
      <Switches2 />
      <Switches3 />
      <Switches4 />
      <Switches5 />
    </DlineCSS2>
      <Cell>OFF DIP</Cell>
      </TableCSS>
          </>)
  }
  </TableCSS1>
    </>
  );
}

export default TableLineAPI1;
