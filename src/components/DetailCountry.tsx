import React from "react";

import { Card,CardContent} from "./ui/Card"
import { DetailId } from "../types/country/country";
import ErrorCountries from "./ErrorComponent";
import { ApiGetDetailCountry } from "../services/api/ApiServices";

/** Este componente permite consultar la información de una país especifico y renderiza la información **/
export function DetailCountry({id}: DetailId)
{
    const { loading, error, data } = ApiGetDetailCountry({id})
    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div> <ErrorCountries messages={error.message} error={true} title="Error: No fue posible obtener la información del país."/> </div>;
    if(!data || !data?.country) return <div> <ErrorCountries error={false} title='No se encontró información' /> </div>;
    const {code,emoji,name,capital,currency,languages,phone,continent} = data.country;

    return (
        <React.Fragment>
            <div>
                <Card className="h-auto bg-card mb-2 rounded-xl border text-card-foreground flex flex-col gap-6 p-4 
                    w-full md:w-[40vw] lg:w-[40vw] xl:w-[40vw]">
                    <div>
                            <CardContent>
                                <div key={code} className="bg-white rounded-lg max-w-md mx-auto text-left">
                                    <div className="flex items-center justify-start space-x-4 mb-4">
                                        <div className="text-4xl">{emoji}</div>
                                        <div className="text-2xl font-semibold">{name}</div>
                                    </div>

                                    <div className="space-y-3 text-lg">
                                        <p className="font-medium"><strong>Code:</strong> {code || 'N/A'}</p>
                                        <p className="font-medium"><strong>Capital:</strong> {capital || 'N/A'}</p>
                                        <p className="font-medium"><strong>Moneda:</strong> {currency || 'N/A'}</p>
                                        <p className="mb-2 font-medium"><strong>Lenguajes:</strong>
                                            {languages.length > 0 ? (
                                                <span>
                                                    {languages.map((language, index) => (
                                                        <span key={index}>
                                                            {language.name}{index < languages.length - 1 ? ', ' : ''}
                                                        </span>
                                                    ))}
                                                </span>
                                            ) : 'No disponible'}
                                        </p>
                                        <p className="font-medium"><strong>Continente:</strong> {continent?.name || 'N/A'}</p>
                                        <p className="font-medium"><strong>Teléfono:</strong> +{phone || 'N/A'}</p>
                                    </div>
                                </div>
                            </CardContent>
                    </div>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default DetailCountry;
