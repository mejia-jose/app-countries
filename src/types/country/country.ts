/** Se definen las interfaces para el manejo de la información de los países **/

export interface Country
{
    code: string;
    name: string;
    emoji: string;
    capital?: string;
    currency?: string,
}

export type FilterCountries =
{
    code?: { eq?: string };
    name?: { regex?: string };
    continent?: { in?: string[] };
    currency?: { regex?: string };
}

export interface Currency
{
  countries: Array<
  {
    currency?: string;
    code:string
  }>
}