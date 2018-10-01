import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { MuroService } from '../../servicios/muro.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {
  public nameUser: string;
  public isLogin: boolean;
  items: any; // variable vacia que guardara los item que provienen de la bd

  constructor(public authService: AuthService, private muroService: MuroService) {
    this.muroService.messageItem().subscribe(item => {
      this.items = item;
    });
   }

  ngOnInit() { //Funcion que me permite obtener el nombre del usuario y ponerlo como titulo de bienvenida
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nameUser = auth.displayName;
        if (!auth.displayName) {
          this.nameUser = 'Usuarix';
          // this.emailUser = auth.email;
        } else {
          this.nameUser = auth.displayName;
        }
      }
    });
  }
}
