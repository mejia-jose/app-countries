import Combobox from "./Combobox";


const continents = [
    {
        value: "africa",
        label: "África",
    },
    {
        value: "antarctica",
        label: "Antártida",
    },
    {
        value: "asia",
        label: "Asia",
    },
    {
        value: "europe",
        label: "Europa",
    },
    {
        value: "north-america",
        label: "América del Norte",
    },
    {
        value: "south-america",
        label: "América del Sur",
    },
    {
        value: "oceania",
        label: "Oceanía",
    },
];

const SelectContinents = () =>
{
   return(
    <Combobox data={continents} text="Selecciona un continente." />
   )
}

export default SelectContinents;