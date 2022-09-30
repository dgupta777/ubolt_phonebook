export interface Contact {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: number;
  status?: 'Active' | 'Inactive';
  designation?: string;
  org?: string;
}
