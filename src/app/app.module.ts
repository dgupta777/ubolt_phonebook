import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './feature/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { SharedModule } from './feature/shared/shared.module';

// Services
import { AuthService } from './feature/services/auth.service';
import { UserContactService } from './feature/services/user-contact.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/header/header.component';
import { HomeComponent } from './feature/home/home.component';
import { FooterComponent } from './feature/footer/footer.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, UserContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
