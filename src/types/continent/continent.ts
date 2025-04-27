/** Se definen las interfaces y los tipos para los continentes **/

interface IPropertiesContinent
{
   code: string;
   name: string;
}

export interface IContinents
{
    continents: IPropertiesContinent[];
}

