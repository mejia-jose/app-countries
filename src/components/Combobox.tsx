/** Componente que permite manejar el llenado dinamico de las listas desplegbles y el manejo del estado de estas. */
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/Popover";
import {ISelectProps} from '../types/forms/selects/selects';

export function Combobox({ data, text, valor, onValueChange } : ISelectProps)
{
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string>(valor || "");

  const handleValueChange = (currentValue: string) => {
    setSelectedValue(currentValue);
    if (onValueChange) {
      onValueChange(currentValue);
    }
    setOpen(false);
  };

  return (
   <div>
      <Popover open={open} onOpenChange={setOpen}>
        <div>
          <PopoverTrigger asChild>
            <div>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-80 justify-between"
              >
                {
                  selectedValue 
                    ? (data.find((item) => item.code === selectedValue)?.name || data.find((item) => item.code === selectedValue)?.currency)
                    : text + "..."
                }
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </div>
          </PopoverTrigger>
        </div>
        <div>
          <PopoverContent className="w-80 p-0">
            <div>
              <Command>
                <CommandInput placeholder="Search item..." />
                 <div>
                  <CommandList>
                      <div><CommandEmpty>No item found.</CommandEmpty></div>
                      <div>
                        <CommandGroup>
                          {data.map((item) => (
                            <CommandItem
                              key={item.code}
                              value={item.code}
                              onSelect={() => handleValueChange(item.code)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedValue === item.code ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {item.currency ? item.currency : item.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </div>
                  </CommandList>
                 </div>
              </Command>
            </div>
          </PopoverContent>
        </div>
      </Popover>
   </div>
  );
}

export default Combobox;