import Combobox from "./Combobox";
import { ISelectPropsGeneral } from "../types/forms/selects/selects";
import { ApiGetCurrencies } from "../services/api/ApiServices";

/** Componente para consultar y mostrar un listado de monedas. Permite el llenado automático del Combobox y la gestión del estado del select. **/
export function SelectCurrency({ value, onChange }: ISelectPropsGeneral)
{
  /**Se realiza la consulta para obtener el listado de las monedas(currency) **/
  const updatedInfo = ApiGetCurrencies();
  return(
    <div>
       <Combobox data={updatedInfo} valor={value} onValueChange={onChange} text="Seleccione una opción." /> 
    </div>
  );
}

export default SelectCurrency;