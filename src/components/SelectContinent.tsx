import { useQuery } from "@apollo/client";
import Combobox from "./Combobox";
import { GET_CONTINENTS } from "../graphql/queries";
import { IContinents } from "../types/continent/continent";

const SelectContinents = () =>
{
   const {  data } = useQuery<IContinents>(GET_CONTINENTS);

   const info = (data?.continents) ? data?.continents : [];
   return(
     <Combobox data={info} text="Seleccione un continente." /> 
   )
}

export default SelectContinents;