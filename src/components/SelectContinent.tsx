import Combobox from "./Combobox";
import { ISelectPropsGeneral } from "../types/forms/selects/selects";
import { ApiGetContinents } from "../services/api/ApiServices";

/** Componente para consultar y mostrar un listado de continents. Permite el llenado automático del Combobox y la gestión del estado del select. **/
export function SelectContinents({ value, onChange }: ISelectPropsGeneral)
{
  /** Se obtiene la información del  el listado de continentes **/
  const updatedInfo = ApiGetContinents();
  return(
    <Combobox data={updatedInfo} valor={value} onValueChange={onChange} text="Seleccione un continente." /> 
  )
}

export default SelectContinents;