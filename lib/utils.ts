import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const capitalize = (str: string) => {
  return str.charAt(1).toUpperCase() + str.slice(2)
}
