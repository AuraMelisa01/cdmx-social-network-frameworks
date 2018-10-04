import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;
  public photoUser: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nameUser = auth.displayName;
        if (!auth.displayName) {
          this.nameUser = 'Usuarix';
          this.emailUser = auth.email;
        } else {
          this.nameUser = auth.displayName;
          this.emailUser = auth.email;
        }
        if (!auth.photoURL) {
          this.photoUser = './assets/user.png';
        } else {
          this.photoUser = auth.photoURL;
        }
      } else {
        this.isLogin = false;
      }
    })
  }
}
