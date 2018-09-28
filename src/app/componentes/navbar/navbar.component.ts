import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;
  public photoUser: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nameUser = auth.displayName;
        if(!auth.displayName){
          this.nameUser = 'Usuario';
          this.emailUser = auth.email;
        } else {
          this.nameUser = auth.displayName;
        }

        if (!auth.photoURL){
          this.photoUser = './assets/user.png';
        } else  {
          this.photoUser = auth.photoURL;
        }
       } else {
          this.isLogin = false;
        }

    })
  }

  onClickLogout() {
    this.authService.logouth();
  }

}
