import { Button } from "./ui/Button";
//import { Combobox } from "./Combobox";
import { Input } from "./ui/Input";
import SelectContinents from "./SelectContinent";

const FormSearch = () =>
{
    return (
    <form>
        <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
                <Input className="bg-white w-90" />
            </div>
            <div className="flex-1">
                <SelectContinents />
            </div>
            <div className="flex-1">
                <SelectContinents />
            </div>
            <div className="flex-1 flex-1">
                <Button className="px-6 py-2 text-white rounded-md">Buscar</Button>
            </div>
        </div>
    </form>
    )
}

export default FormSearch;