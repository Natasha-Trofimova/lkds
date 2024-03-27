import Switches1 from "../AZO1/Switches1"
import Switches2 from "../AZO1/Switches2"
import Switches3 from "../AZO1/Switches3"
import Switches4 from "../AZO1/Switches4"
import Switches5 from "../AZO1/Switches5"
import Switches6 from "../AZO1/Switches6"
import Switches7 from "../AZO1/Switches7"
import Switches8 from "../AZO1/Switches8"

import css from '../../Styled.css'
const { TableCSS, DlineCSS2, Cell} = css

import { useContext } from "react";
import { Device } from "../../../../Context/Device";

function TableLineApy2n() {
  const { addressDevice } = useContext(Device);
  return (
    <>
    <TableCSS>
    {addressDevice === "" && <Cell>адрес для данного устройства не выбран</Cell>}
        {addressDevice < 188 &&  addressDevice !== "" &&<Cell>адрес для данного устройства не выбран</Cell>}
        {addressDevice > 251 && <Cell>адрес для данного устройства не выбран</Cell>}
          {addressDevice !== "" && 
          addressDevice >= 188 &&
          addressDevice <= 251 &&(
            <>
      <DlineCSS2>
        <Cell>A0</Cell>
        <Cell>A1</Cell>
        <Cell>A2</Cell>
        <Cell>A3</Cell>
        <Cell>A4</Cell>
        <Cell>A5</Cell>
        <Cell>A6</Cell>
        <Cell>R-CAN</Cell>
      </DlineCSS2>
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
      </>
    )}
    </TableCSS>
    </>
  )
}

export default TableLineApy2n 