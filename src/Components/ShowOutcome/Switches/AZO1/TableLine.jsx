import Switches1 from "./Switches1";
import Switches2 from "./Switches2";
import Switches3 from "./Switches3";
import Switches4 from "./Switches4";
import Switches5 from "./Switches5";
import css from "../../Styled.css";
import Switches6 from "./Switches6";
import Switches7 from "./Switches7";
import Switches8 from "./Switches8";

import { useContext } from "react";
import { Device } from "../../../../Context/Device";

const { TableCSS, DlineCSS1, DlineCSS2, Cell, Celltxt, TableCSS1 } = css;

function TableLineAzo1() {
  const { addressDevice } = useContext(Device);
  return (
    <>
<TableCSS1>
  {addressDevice === "" && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
  {addressDevice < 188 &&  addressDevice !== "" &&<Celltxt>Aдрес для данного устройства не выбран</Celltxt>}
  {addressDevice > 251 && <Celltxt>Aдрес для данного устройства не выбран</Celltxt>}

  {addressDevice !== "" && addressDevice >= 188 && addressDevice <= 251 &&
    (<TableCSS>
      <DlineCSS1>
        <Cell>0</Cell>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
        <Cell>7</Cell>
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

export default TableLineAzo1;
