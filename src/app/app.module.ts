import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment} from '../environments/environment';

import { AuthService } from './servicios/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrerComponent } from './componentes/registrer/registrer.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';

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
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
