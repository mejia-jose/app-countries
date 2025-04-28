import {useNavigate } from "react-router-dom";

import { Card,CardContent,CardHeader,CardTitle} from "./ui/Card"
import ErrorCountries from "./ErrorComponent";
import { IFormPropsUnique } from "../types/forms/forms";
import IconsServices from "../services/icons/IconsServices";
import { ApiGetCountries, getClass } from "../services/api/ApiServices";

/** Componente que consulta la información de los paises, filtra y renderiza **/
export function ListCountries(filters : IFormPropsUnique)
{
    const navigate = useNavigate();
    /**Se realiza la consulta para obtener el listado de los paises **/
    const { loading, error, data } = ApiGetCountries(filters);

    if (loading) return <div className="text-center">Cargando...</div>;
    if (error) return <div> <ErrorCountries messages={error.message} error={true}/> </div>;
    if(data?.countries.length === 0) return <div> <ErrorCountries error={false} title='No se encontró información' /> </div>;
    
    const getClassType = getClass(data?.countries.length || 0);
    const IconComponent = IconsServices('eyes');
    if(!IconComponent) return null;

    return (
        <>
            <div className={getClassType}>
            {data?.countries.map((country) => (
                <Card
                key={country.code}
                title={`Ver detalle de ${country.name}`}
                className="cursor-pointer"
                onClick={() => navigate(`/country/${country.code}`)}
                >
                <CardHeader>
                    <CardTitle>{country.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="">
                    <div className="text-4xl mb-2">{country.emoji}</div>
                    <p>Capital: {country.capital || 'N/A'}</p>
                    <span className="mt-2 inline-flex items-center color-text hover:underline">
                        <IconComponent size={20} className="mr-2" /> Ver detalle
                    </span>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        </>
    );
}
export default ListCountries;
