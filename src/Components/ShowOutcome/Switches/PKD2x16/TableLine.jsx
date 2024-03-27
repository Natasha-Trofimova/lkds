import css from '../../Styled.css'
import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from '../SwitchesAll/Switches2'
import Switches3 from '../SwitchesAll/Switches3'
import Switches4 from '../SwitchesAll/Switches4'
import Switches5 from './Switches5'
import { useContext } from "react";
import { Device } from "../../../../Context/Device";

const { TableCSS, DlineCSS2, Cell } = css


function TableLinePKD2x16() {
  const { addressDevice } = useContext(Device);

  return (
    <>
    <TableCSS>
    <DlineCSS2>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
      </DlineCSS2>
      {addressDevice === "" && <Cell>адрес для данного устройства не выбран</Cell>}
      {addressDevice < 32 &&  addressDevice !== "" &&<Cell>адрес для данного устройства не выбран</Cell>}
      {addressDevice > 47 && <Cell>адрес для данного устройства не выбран</Cell>}
        {addressDevice !== "" && 
        addressDevice >= 32 &&
        addressDevice <= 47 &&(
          <DlineCSS2>
        <Switches1 />
        <Switches2 />
        <Switches3 />
        <Switches4 />
        <Switches5 />
      </DlineCSS2>
        )}
    </TableCSS>
      
    </>
  )
}

export default TableLinePKD2x16