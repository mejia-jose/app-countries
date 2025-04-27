
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { Card,CardContent,CardHeader,CardTitle} from "./ui/Card"
import { Country } from "../types/country/country";
import { GET_COUNTRIES } from "../graphql/queries";
import ErrorCountries from "./ErrorCountries";

  
const DetailCountry = () => 
{
    const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div> <ErrorCountries messages={error.message} error={true}/> </div>;
    if(data?.countries.length === 0) return <div> <ErrorCountries error={false} title='No se encontró información' /> </div>;

    return (
        <>
            {data?.countries.map((country) => (
                <Card className="h-110 bg-card mb-8 rounded-xl border text-card-foreground flex flex-col gap-6 p-2" style={{width: '50vw'}} key={country.name}>
                    <CardHeader>
                        <CardTitle>{country.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div key={country.code} className="">
                            <div className="text-4xl mb-2">{country.emoji}</div>
                            <p>Code: {country.capital || 'N/A'}</p>
                            <p>Name: {country.capital || 'N/A'}</p>
                            <p>Currency: {country.capital || 'N/A'}</p>
                            <p>Continent: {country.capital || 'N/A'}</p>
                            <p>Lenguages: {country.capital || 'N/A'}</p>
                            <p>Capital: {country.capital || 'N/A'}</p>
                            <p>Bandera: {country.capital || 'N/A'}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default DetailCountry;
