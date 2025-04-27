import { useQuery } from "@apollo/client";
import Combobox from "./Combobox";
import { GET_CURRENCIES } from "../graphql/queries";
import { Currency } from "../types/country/country";

const SelectCurrency = () =>
{
   const { data } = useQuery<Currency>(GET_CURRENCIES);

  const info = data?.countries ? data?.countries : [];
   return(
     <Combobox data={info} text="Seleccione una opción." /> 
   )
}

export default SelectCurrency;