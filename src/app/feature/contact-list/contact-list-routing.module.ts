import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/authguard.guard';

import { ContactListComponent } from './contact-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class ContactListRoutingModule {}
