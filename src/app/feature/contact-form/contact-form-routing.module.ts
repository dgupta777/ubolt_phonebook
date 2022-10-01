import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './contact-form.component';

const routes: Routes = [
  {
    path: 'add-contact',
    component: ContactFormComponent,
  },
  {
    path: 'edit-contact/:id',
    component: ContactFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactFormRoutingModule {}
