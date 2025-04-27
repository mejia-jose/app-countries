import { gql } from '@apollo/client';

/**Permite obtener el listado de los países **/
export const GET_COUNTRIES = gql`
  query GetCountries($filter: CountryFilterInput) 
  {
    countries(filter: $filter) 
    {
      code
      name
      emoji
      capital
      currency
    }
}`;

/**Permite obtener el listado de los continentes **/
export const GET_CONTINENTS = gql`
query GetContinents 
{
  continents {
    code
    name
  }
}`;

/** Permite obtener el listado de currencies **/
export const GET_CURRENCIES = gql`
query GetCurrencies
{
  countries
  {
    currency
    code
  }
}`;

/** Permite obtener la información a detalle de un país **/
export const GET_DETAIL_COUNTRY = gql`
query GetDetailCountry($code: ID!)
{
  country(code: $code) 
  {
    code
    name
    emoji
    capital
    currency
    continent {
      name
    }
    languages {
      name
    }
    phone
  }
}`;