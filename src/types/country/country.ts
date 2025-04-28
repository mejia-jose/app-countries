/** Se definen las interfaces para el manejo de la información de los países **/

export interface ICountry
{
  code: string;
  name: string;
  emoji: string;
  capital?: string;
  currency?: string,
}

export type TFilterCountries =
{
  code?: { eq?: string };
  name?: { regex?: string };
  continent?: { in?: string[] };
  currency?: { regex?: string };
}

export interface ICurrency
{
  countries: Array<
  {
    currency?: string;
    code:string
  }>
}

export interface IDetailCountry extends ICountry
{
  continent : 
  {
    name: string;
  }
    
  languages : Array<
  {
    name: string;
  }>

  phone: string;
}

export type DetailId =
{
  id?: string;
} 