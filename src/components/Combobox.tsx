"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/Command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/Popover"

type DataProps =
{
  name?: string;
  code: string;
  currency?: string;
}

interface SelectProps 
{
  data: DataProps[];
  text: string;
}

const Combobox : React.FC<SelectProps> = ({data,text}) =>
{
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-90 justify-between"
        >
          {
            value 
              ? (data.find((item) => item.code === value)?.name || data.find((item) => item.code === value)?.currency)
              : text + "..."
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-90 p-0">
        <Command>
          <CommandInput placeholder="Search item..." />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.code}
                  value={item.code}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  { item.currency ? item.currency : item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Combobox;
