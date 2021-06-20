import {Address} from './Address';

export interface ClientDTO {
  id: number;
  name: string;
  email: string;
  imageUrl?: string;
  adresses: Address[];
}
