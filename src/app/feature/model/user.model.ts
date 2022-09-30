import { Contact } from './contact.model';

export interface User {
  id?: string;
  name?: string;
  email?: string;
  contacts?: Contact[];
  reminders?: Reminder[];
}

interface Reminder {
  id?: string;
  name?: string;
  mobile?: number;
  date?: Date;
  time?: string;
}
