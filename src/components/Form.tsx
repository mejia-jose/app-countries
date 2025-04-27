import { Button } from "./ui/Button";
//import { Combobox } from "./Combobox";
import { Input } from "./ui/Input";
import SelectContinents from "./SelectContinent";
import SelectCurrency from "./SelectCurrency";
import { useState } from "react";

export interface IFormProps
{
    filters: (data:{
        search?: string;
        continent?: string;
        currency?: string;
   }) => void;
}

const FormSearch: React.FC<IFormProps> = ({ filters }) =>
{
    const [search, setSearch] = useState<string>('');
    const [continent, setContinent] = useState<string>('');
    const [currency, setCurrecy] = useState<string>('');

    const formFilter = (e: React.FormEvent) =>
    {
       e.preventDefault();
       filters({search: search || '', continent: continent || '', currency: currency || '',});
    }

    return (
    <form onSubmit={formFilter}>
        <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
                <Input value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-white w-90" />
            </div>
            <div className="flex-1">
                <SelectContinents value={continent} onChange={(value) => setContinent(value)} />
            </div>
            <div className="flex-1">
                <SelectCurrency value={currency} onChange={(value) => setCurrecy(value)} />
            </div>
            <div className="flex-1 flex-1">
                <Button className="px-6 py-2 text-white rounded-md">Buscar</Button>
            </div>
        </div>
    </form>
    )
}

export default FormSearch;