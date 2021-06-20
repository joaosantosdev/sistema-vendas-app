import {City} from "./City";

export interface Address {
  id: number;
  cep: string;
  description: string;
  district: string;
  number: string;
  city: City
}

