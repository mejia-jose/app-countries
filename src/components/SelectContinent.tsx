import { useQuery } from "@apollo/client";
import Combobox from "./Combobox";
import { GET_CONTINENTS } from "../graphql/queries";
import { IContinents } from "../types/continent/continent";
import { ISelectPropsGeneral } from "../types/forms/selects/selects";

/** Componente para consultar y mostrar un listado de continents. Permite el llenado automático del Combobox y la gestión del estado del select. **/
export function SelectContinents({ value, onChange }: ISelectPropsGeneral)
{
  /** Se consulta la api y se obtiene el listado de continentes **/
  const {  data } = useQuery<IContinents>(GET_CONTINENTS);

  const info = (data?.continents) ? data?.continents : [];
  return(
    <Combobox data={info} valor={value} onValueChange={onChange} text="Seleccione un continente." /> 
  )
}

export default SelectContinents;