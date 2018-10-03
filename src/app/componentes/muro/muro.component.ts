import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { MuroservService } from '../../servicios/muroserv.service';



@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {
  public nameUser: string;
  public isLogin: boolean;
  items: any; // variable vacia que guardara los item que provienen de la bd

  editItem:any = {
    post:""
  }

  constructor(public authService: AuthService, private muroServ: MuroservService) {
    this.muroServ.messageItem().subscribe(item => {
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

  deletePost(item){
    this.muroServ.deleteItem(item);
  }


  editPost(item) {
    this.editItem = item;
  }

  addMessageEdit(){
    this.muroServ.editarItem(this.editItem);
    this.editItem.post = "";
  }

}
