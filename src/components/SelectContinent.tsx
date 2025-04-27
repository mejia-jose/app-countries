import { useQuery } from "@apollo/client";
import Combobox from "./Combobox";
import { GET_CONTINENTS } from "../graphql/queries";
import { Continents } from "../types/continent/continent";

const SelectContinents = () =>
{
   const {  data } = useQuery<Continents>(GET_CONTINENTS);

   const info = (data?.continents) ? data?.continents : [];
   return(
     <Combobox data={info} text="Seleccione un continente." /> 
   )
}

export default SelectContinents;