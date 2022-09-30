import { Contact } from './contact.model';

export interface User {
  id?: string;
  name?: string;
  email?: string;
  contacts?: Contact[];
}
