import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {
  public nameUser: string;
  public isLogin: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
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
