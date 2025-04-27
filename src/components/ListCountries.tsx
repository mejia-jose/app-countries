
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { Card,CardContent,CardHeader,CardTitle} from "./ui/Card"
import { Country,FilterCountries } from "../types/country/country";
import { GET_COUNTRIES } from "../graphql/queries";
import ErrorCountries from "./ErrorCountries";

  
const ListCountries = () => 
{
    //const [searchTerm, setFilter] = useState<FilterCountries>({});
    const searchCountries = (value: string) =>
    {
        //setFilter({name: {regex: `.*${name}.*` }})
    }
    const search = '';

    const filter: FilterCountries = search 
    ? { 
        name: { regex: `.*${search}.*` } } 
    : {};

    const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES,{ variables : {filter} });

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div> <ErrorCountries messages={error.message} error={true}/> </div>;
    if(data?.countries.length === 0) return <div> <ErrorCountries error={false} title='No se encontró información' /> </div>;

    return (
        <>
            {data?.countries.map((country) => (
                <Card key={country.name}>
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
        </>
    );
};

export default ListCountries;
