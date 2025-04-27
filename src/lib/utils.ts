import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Importante para el uso de los componentes de Shadcn **/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}