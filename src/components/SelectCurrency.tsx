import { useQuery } from "@apollo/client";
import Combobox from "./Combobox";
import { GET_CURRENCIES } from "../graphql/queries";
import { ICurrency } from "../types/country/country";
import { ISelectPropsGeneral } from "../types/forms/selects/selects";

/** Componente para consultar y mostrar un listado de monedas. Permite el llenado automático del Combobox y la gestión del estado del select. **/
export function SelectCurrency({ value, onChange }: ISelectPropsGeneral)
{
  /**Se realiza la consulta para obtener el listado de las monedas(currency) **/
  const { data } = useQuery<ICurrency>(GET_CURRENCIES);

  const info = data?.countries ? data?.countries : [];
  return(
    <Combobox data={info} valor={value} onValueChange={onChange} text="Seleccione una opción." /> 
  );
}

export default SelectCurrency;