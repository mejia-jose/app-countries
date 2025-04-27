import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { Card,CardContent,CardHeader,CardTitle} from "./ui/Card"
import { Country } from "../types/country/country";
import { GET_COUNTRIES } from "../graphql/queries";

  
const ListCountries = () => 
{
    const { loading, error, data } = useQuery<{ countries: Country[],  totalCountries:number }>(GET_COUNTRIES);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
                                className="mt-2 inline-block text-blue-500 hover:underline">
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
