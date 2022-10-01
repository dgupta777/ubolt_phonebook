import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/authguard.guard';

import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((a) => a.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../contact-list/contact-list.module').then(
        (cl) => cl.ContactListModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'contact-form',
    loadChildren: () =>
      import('../contact-form/contact-form.module').then(
        (cf) => cf.ContactFormModule
      ),
    canLoad: [AuthGuard],
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
