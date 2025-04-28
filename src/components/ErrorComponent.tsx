import React from "react";

/* import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import Error from '../assets/images/error.gif';
import NotContent from '../assets/images/not_content.svg'; */
import { ErrorLoadingCountries } from "../types/errors/error";

/** Componente para mostrar errores y cuando no se encuentran países. **/
export function ErrorComponent({error,messages,title}: ErrorLoadingCountries)
{
  const messageTitle = title ?? 'Error al obtener el listado de países.';
  return(
    <React.Fragment>
      {/* <Card className='h-110 bg-card rounded-xl border text-card-foreground flex flex-col gap-6 p-2' style={{width: '90vw'}}>
          <CardHeader>
              <CardTitle> {messageTitle} </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center w-full py-8">
              <p className='flex justify-center'>{messages}</p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center"> 
                <img 
                  className="w-full max-w-[200px] md:max-w-[300px] mx-auto" 
                  alt={error ? "Error en la búsqueda" : "No se encontraron resultados"}
                  src={error ? Error : NotContent} 
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    {error ? "¡Ups! Algo salió mal" : "Sin resultados"}
                  </h2>
                  <p className="text-muted-foreground">
                    {error ? 
                      "No pudimos cargar la información solicitada." : 
                      "No encontramos países que coincidan con los parametros de búsqueda."
                    }
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
      </Card> */}<p>Hola {messageTitle}</p>
      {error}
      {messages}
    </React.Fragment>
  )
}

export default ErrorComponent;