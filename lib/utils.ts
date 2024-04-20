import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  addressFour,
  addressThree,
  addressTwo,
  addresses,
} from "./wallet-address";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAddress(address_number: number | any) {
  switch (address_number) {
    case 1:
      return addresses;
    case 2:
      return addressTwo;
    case 3:
      return addressThree;
    case 4:
      return addressFour;
    default:
      return addresses;
  }
}
