import { useContext } from "react";
import { Device } from "../../Context/Device";
import MaxInputAdddress from "./InputAdddress/MaxInputAdddress";
import MiniInputAdddress from "./InputAdddress/MiniInputAdddress";
import PKD2x16InputAdddress from "./InputAdddress/PKD2x16InputAdddress";
import PKD2x2InputAdddress from "./InputAdddress/PKD2x2InputAdddress";
import css from "./Styled.css";

const { AddressSelectionCss } = css;

function AddressSelection() {
  const { nameDevice } = useContext(Device);

  return (
    <>
      <AddressSelectionCss>
        {/* диапозон адресов устройства */}
        {/* <br /> */}
        {/* {nameDevice} */}
        {/* <br /> */}
        {nameDevice == "" && (<>Выберите устройство для отображения допустимого диапозона адрессов</>)}
        {nameDevice === "Устройства" && <>Выберите устройство для отображения допустимого диапозона адрессов</>}
        {nameDevice !== "" && nameDevice !== "Устройства" && (
          <>Выберите адрес для {nameDevice}</> 
        )} 

        <br />
        <>
        {nameDevice === "АПУ-1 ОЕМ" && (<><MaxInputAdddress /></>)}
        {nameDevice === "АПУ-2Н" && (<><MaxInputAdddress /></>)}
        {nameDevice === "АЗО-1" && (<><MaxInputAdddress /></>)}
        {nameDevice === "АЛИ-2" && (<><MaxInputAdddress /></>)}
        {nameDevice === "ModBUS" && (<><MiniInputAdddress /></>)}
        {nameDevice === "АТУ8х2" && (<><MiniInputAdddress /></>)}
        {nameDevice === "АСК-16" && (<><MiniInputAdddress /></>)}
        {nameDevice === "АПИ-1" && (<><MiniInputAdddress /></>)}
        {nameDevice === "АРВ8х6" && (<><MiniInputAdddress /></>)}
        {nameDevice === "АТС4х4" && (<><MiniInputAdddress /></>)}
        {nameDevice === "ПКД 2х2" && (<><PKD2x2InputAdddress /></>)}
        {nameDevice === "ПКД 2х16" && (<><PKD2x16InputAdddress /></>)}
        </>
      </AddressSelectionCss>
    </>
  );
}

export default AddressSelection;
