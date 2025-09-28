import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export const className = (...inputs) => {
  return twMerge(clsx(inputs))
}