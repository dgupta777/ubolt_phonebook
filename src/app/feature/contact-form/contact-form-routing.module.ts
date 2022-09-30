import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/authguard.guard';

import { ContactFormComponent } from './contact-form.component';

const routes: Routes = [
  {
    path: 'add-contact',
    component: ContactFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-contact/:id',
    component: ContactFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class ContactFormRoutingModule {}
