import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth ) { }

  loginEmail(email:string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }


  registrerUser(email:string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),  /* Devuelve la promesa con los datos del usuario*/
      err => reject (err));
    });
  }

  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }

  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }


  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }


  logouth() {
    return this.afAuth.auth.signOut();
  }
}


