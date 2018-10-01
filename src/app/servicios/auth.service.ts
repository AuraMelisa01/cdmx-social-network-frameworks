import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import { Muro } from '../componentes/models/muro';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  messageList: AngularFireList<any>;
  selectedMessage: Muro = new Muro();  //Guardara temporalmente los datos

  constructor(public afAuth: AngularFireAuth, private firebase: AngularFireDatabase ) { }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }


  registrerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),  /* Devuelve la promesa con los datos del usuario*/
      err => reject (err));
    });
  }

  getAuth() { /*Funcion que devuelve los datos del usuario logeado*/
    return this.afAuth.authState.map(auth => auth);
  }


  logouth() {
    return this.afAuth.auth.signOut();
  }

  loginGoogle(){ /*Invocacion para poder utilizar metodo de google en la opncion de login*/
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  loginFacebook(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  getMessage() {
    return this.messageList = this.firebase.list('postMessage');
  }

  insertMessage(muro: Muro ){
    return this.messageList.push({
      messageText:muro.text
    });
  }

  updateMessage(muro: Muro) {
    this.messageList.update(muro.key, {
      messageText:muro.text
    });
  }

  deleteMessage(key: string) {
    this.messageList.remove(key);
  }

}


