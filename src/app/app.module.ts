import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
// import { FlashMessageModule } from 'angular2-flash-message';
// import { FlashMessageService } from 'angular2-flash-message';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { environment} from '../environments/environment';

import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './security-guard/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrerComponent } from './componentes/registrer/registrer.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';

import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent,
    HomeComponent,
    NavbarComponent,
    PrivatePageComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // FlashMessageModule
  ],
  providers: [AuthService, AuthGuard, /*FlashMessageService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
