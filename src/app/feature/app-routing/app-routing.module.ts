import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from '../contact-list/contact-list.component';
import { LoginComponent } from '../auth/login/login.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  { path: 'add-contact', component: ContactFormComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
