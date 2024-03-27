import css from "../../Styled.css";
import Switches1R from "./Sw/Switches1R";
import Switches2R from "./Sw/Switches2R";
import Switches3R from "./Sw/Switches3R";
import Switches4R from "./Sw/Switches4R";
import Switches5R from "./Sw/Switches5R";
import Switches6 from "./Sw/Switches6";
import Switches7 from "./Sw/Switches7";
import Switches8 from "./Sw/Switches8";

const { TableVerticallyCSS, DlineCSS2, CellVertically, Cell } = css;

import { useContext } from "react";
import { Device } from "../../../../Context/Device";

function TableLineAPY1OEM() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      <TableVerticallyCSS>
        
        {addressDevice === "" && <CellVertically>адрес для данного устройства не выбран</CellVertically>}
      {addressDevice < 188 &&  addressDevice !== "" &&<CellVertically>адрес для данного устройства не выбран</CellVertically>}
      {addressDevice > 251 && <CellVertically>адрес для данного устройства не выбран</CellVertically>}
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
          <Switches1R/>
          <Switches2R/>
          <Switches3R/>
          <Switches4R/>
          <Switches5R/>
          <Switches6 />
          <Switches7 />
          <Switches8 />
        </DlineCSS2>
          </>
        )}
        
      </TableVerticallyCSS>
    </>
  );
}

export default TableLineAPY1OEM;
