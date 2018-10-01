import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { FlashMessageModule } from 'angular2-flash-message';
// import { FlashMessageService } from 'angular2-flash-message';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//CONEXION CON FIREBASE
import { environment} from '../environments/environment';

//SERVICIOS
import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './security-guard/auth.guard';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrerComponent } from './componentes/registrer/registrer.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MuroComponent } from './componentes/muro/muro.component';
import { MuroAddComponent } from './componentes/muro-add/muro-add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent,
    HomeComponent,
    NavbarComponent,
    PerfilComponent,
    MuroComponent,
    MuroAddComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FlashMessageModule
  ],
  providers: [AuthService, AuthGuard, /*FlashMessageService*/],
  bootstrap: [AppComponent]
})

export class AppModule { }
