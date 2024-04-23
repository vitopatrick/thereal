import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import {
  addressFour,
  addressThree,
  addressTwo,
  addresses,
} from "../lib/wallet-address";

export function getAddress(address_number: number | any) {
  if (address_number === 1) {
    return addresses;
  } else if (address_number === 2) {
    return addressTwo;
  } else if (address_number === 3) {
    return addressThree;
  } else if (address_number === 4) {
    return addressFour;
  }
}