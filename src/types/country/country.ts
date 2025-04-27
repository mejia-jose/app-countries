/** Se definen las interfaces para el manejo de la información de los países **/

export interface Country
{
    code: string;
    name: string;
    emoji: string;
    capital?: string;
    currency?: string,
}