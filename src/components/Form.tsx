import { useState } from "react";

import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import SelectContinents from "./SelectContinent";
import SelectCurrency from "./SelectCurrency";
import { IFormProps } from "../types/forms/forms";
import IconsServices from "../services/icons/IconsServices";

/** Componente que permite renderizar y manejar el estado del formulario de los filtros **/
export function FormSearch({ filters } : IFormProps)
{
    const [search, setSearch] = useState('');
    const [continent, setContinent] = useState('');
    const [currency, setCurrecy] = useState('');

    /** Se maneja el estado del formulario **/
    const formFilter = (e: React.FormEvent) =>
    {
       e.preventDefault();
       filters({search: search || '', continent: continent || '', currency: currency || '',});
    }

    /** Se encarga de limpiar los campos del formulario **/
    const clearForm = (e: React.FormEvent) =>
    {
        e.preventDefault();
        setSearch('');
        setContinent('');
        setCurrecy('');
        console.log(setContinent(''))
    }

    const IconComponent = IconsServices('search');
    const IconComponentClear = IconsServices('clear');
    if(!IconComponent || !IconComponentClear) return null;

    return (
        <form onSubmit={formFilter}>
           <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex-1 flex justify-center items-center">
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} className="bg-white w-80 flex justify-center items-center" />
                </div>
                <div className="flex-1">
                    <SelectContinents value={continent} onChange={(value) => setContinent(value)} />
                </div>
                <div className="flex-1">
                    <SelectCurrency value={currency} onChange={(value) => setCurrecy(value)} />
                </div>
                <div className="flex-1 min-w-[200px] flex justify-center items-center gap-4">
                    <Button className="px-6 py-2 text-white rounded-md cursor-pointer btn-color-main w-45">
                        <IconComponent className="mr-2" /> Buscar
                    </Button>
                    <Button onClick={clearForm} className="px-6 py-2 text-white gap-2 rounded-md cursor-pointer btn-color-main" title="Limpiar filtros.">
                        <IconComponentClear className="mr-2" />
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default FormSearch;