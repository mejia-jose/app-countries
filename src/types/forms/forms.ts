
/** Interface para el manejo de los campos del formulario de filtros **/
export interface IFormProps
{
    filters: (data:{
        search?: string;
        continent?: string;
        currency?: string;
   }) => void;
}