import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from "./Switches2";
import Switches3 from "./Switches3";
import Switches4 from "./Switches4";
import Switches5 from "./Switches5";
import Switches6 from "./Switches6";
import Switches7 from "./Switches7";
import Switches8 from "./Switches8";
import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from "../../Styled.css";
const { TableCSS, DlineCSS1, DlineCSS2, Cell, TableCSS1, Celltxt } = css

function TableLinePKD2x2() {
  const { addressDevice } = useContext(Device);
  return (
    <>
    <TableCSS1>
        {addressDevice === "" && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
        {addressDevice < 64 && addressDevice !== "" && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
        {addressDevice > 127 && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
        {addressDevice !== "" && addressDevice >= 64 && addressDevice <= 127 && 
          (<TableCSS>
            <DlineCSS1>
              <Cell>0</Cell>
              <Cell>1</Cell>
              <Cell>2</Cell>
              <Cell>3</Cell>
              <Cell>4</Cell>
              <Cell>5</Cell>
              <Cell>Т</Cell>
              <Cell>М</Cell>
            </DlineCSS1>
            <DlineCSS2>
              <Switches1 />
              <Switches2 />
              <Switches3 />
              <Switches4 />
              <Switches5 />
              <Switches6 />
              <Switches7 />
              <Switches8 />
            </DlineCSS2>
          </TableCSS>)
          }
    </TableCSS1>
    </>
  );
}

export default TableLinePKD2x2;
