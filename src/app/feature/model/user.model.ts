import { Contact } from './contact.model';

export interface User {
  id?: string;
  email?: string;
  contacts?: Contact[];
}
