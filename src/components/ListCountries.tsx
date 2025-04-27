
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { Card,CardContent,CardHeader,CardTitle} from "./ui/Card"
import { ICountry,TFilterCountries } from "../types/country/country";
import { GET_COUNTRIES } from "../graphql/queries";
import ErrorCountries from "./ErrorComponent";
import { IFormProps } from "../types/forms/forms";

/** Componente que consulta la información de los paises, filtra y renderiza **/
export function ListCountries(filterData : IFormProps)
{
    console.log(filterData);
    const search = '';

    const filter: TFilterCountries = search ? { name: { regex: `.*${search}.*` } } : {};

    /**Se realiza la consulta para obtener el listado de los paises **/
    const { loading, error, data } = useQuery<{ countries: ICountry[] }>(GET_COUNTRIES,{ variables : {filter} });

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div> <ErrorCountries messages={error.message} error={true}/> </div>;
    if(data?.countries.length === 0) return <div> <ErrorCountries error={false} title='No se encontró información' /> </div>;
    
    const classBase = 'h-auto bg-card mb-2 rounded-xl border text-card-foreground flex flex-col gap-6 p-4';

    const getClass = (count: number) => 
    {
      switch (count) {
        case 1:
          return classBase+' grid-cols-1'; 
        case 2:
          return classBase+' sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6'; 
        case 3:
          return classBase+' sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4';
        default:
          return 'w-full flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
      }
    };
    
    const getClassType = getClass(data?.countries.length || 0);

    return (
        <>
            <div className={getClassType}>
                {data?.countries.map((country) => (
                    <Card key={country.name} >
                        <CardHeader>
                            <CardTitle>{country.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div key={country.code} className="">
                                <div className="text-4xl mb-2">{country.emoji}</div>
                                <p>Capital: {country.capital || 'N/A'}</p>
                                <Link to={`/country/${country.code}`}
                                    className="mt-2 inline-block color-text hover:underline">
                                    Ver más información
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}     
            </div>
        </>
    );
}
export default ListCountries;
