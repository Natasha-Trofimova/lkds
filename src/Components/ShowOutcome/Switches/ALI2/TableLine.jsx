import css from '../../Styled.css'
import Switches1 from '../SwitchesAll/Switches1'
import Switches2 from '../SwitchesAll/Switches2'
import Switches3 from '../SwitchesAll/Switches3'
import Switches4 from '../SwitchesAll/Switches4'
import Switches5 from '../SwitchesAll/Switches5'
import Switches6 from './Switches6'
import Switches7 from './Switches7'
import Switches8 from './Switches8'
import { useContext } from "react";
import { Device } from "../../../../Context/Device";


const { TableCSS, DlineCSS2, Cell } = css


function TableLineALI2() {

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
        <Cell>A5</Cell>
        <Cell>CFG0</Cell>
        <Cell>CFG1</Cell>
      </DlineCSS2>

      {addressDevice === "" && <Cell>адрес для данного устройства не выбран</Cell>}
      {addressDevice < 188 &&  addressDevice !== "" &&<Cell>адрес для данного устройства не выбран</Cell>}
      {addressDevice > 251 && <Cell>адрес для данного устройства не выбран</Cell>}
        {addressDevice !== "" && 
        addressDevice >= 188 &&
        addressDevice <= 251 &&(
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
        )}
      
    </TableCSS>
    </>
  )
}

export default TableLineALI2 