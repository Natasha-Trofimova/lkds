import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from '../SwitchesAll/Switches2'
import Switches3 from '../SwitchesAll/Switches3'
import Switches4 from '../SwitchesAll/Switches4'
import Switches5 from './Switches5'
import { useContext } from "react";
import { Device } from "../../../../Context/Device";
import css from '../../Styled.css'
const { TableCSS, DlineCSS1, DlineCSS2, Cell, TableCSS1, Celltxt } = css

function TableLinePKD2x16() {
  const { addressDevice } = useContext(Device);
  return (
    <>
    <TableCSS1>
      {addressDevice === "" && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
      {addressDevice < 32 &&  addressDevice !== "" &&<Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
      {addressDevice > 47 && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
      {addressDevice !== "" && addressDevice >= 32 && addressDevice <= 47 &&
        (<TableCSS>
          <DlineCSS1>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
            <Cell>5</Cell>
          </DlineCSS1>
          <DlineCSS2>
            <Switches1 />
            <Switches2 />
            <Switches3 />
            <Switches4 />
            <Switches5 />
          </DlineCSS2>
        </TableCSS>
        )}
    </TableCSS1>
    </>
  )
}

export default TableLinePKD2x16