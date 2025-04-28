import { useQuery } from "@apollo/client";
import { GET_CONTINENTS, GET_COUNTRIES, GET_CURRENCIES } from "../../graphql/queries";
import { ICountry, ICurrency, TFilterCountries } from "../../types/country/country";
import { IFormPropsUnique } from "../../types/forms/forms";
import { IContinents } from "../../types/continent/continent";

/**Permite realizar la consulta para obtener el listado de los paises, aplicando filtros **/
export function ApiGetCountries(filters: IFormPropsUnique)
{
    const {search, continent, currency} = filters.filters;
    const searchText = (search) ? search.charAt(0).toUpperCase() + search.slice(1) : null;

    const filter: TFilterCountries = search ? 
    {
        name: { regex: `.*${searchText}.*` },
    } : {};
        

    if(continent)
    {
        filter.continent =  {in: [continent]};
    }

    if(currency)
    {
        filter.currency = { regex: `.*${currency}.*` }
    }

    return useQuery<{ countries: ICountry[] }>(GET_COUNTRIES,{ variables : {filter} });
}

/** Permite realizar la consulta y obtener el listado de continentes **/
export function ApiGetContinents()
{
    const {  data } = useQuery<IContinents>(GET_CONTINENTS);

    const info = (data?.continents) ? data?.continents : [];
    return [{ code: '', name: 'Todos' }, ...info];
}

/** Permite realizar la consulta y obtener el listado de las monedas(currencies) **/
export function ApiGetCurrencies()
{
    const { data } = useQuery<ICurrency>(GET_CURRENCIES);
    
    const info = data?.countries ? data?.countries : [];
    return [{ code: '', name: 'Todos' }, ...info];
}

/** Permite definir las columnas de las tarjetas de acuerdad a la cantidad del resultado obtenido */
export function getClass(count: number)
{
    const classBase = 'h-auto bg-card mb-2 rounded-xl border text-card-foreground flex flex-col gap-6 p-4';

    switch (count) 
    {
        case 1:
            return classBase+' grid-cols-1'; 
        case 2:
            return classBase+' sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6'; 
        case 3:
            return classBase+' sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4';
        default:
            return 'w-full flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
    }
}