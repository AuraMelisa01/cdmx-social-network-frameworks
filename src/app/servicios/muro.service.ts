import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

export interface Item { post: string; }

@Injectable({
  providedIn: 'root'
})
export class MuroService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a =>{
        const data= a.payload.doc.data() as Item; //informacion de la data
        const id= a.payload.doc.id; //id de cada campo de la data
        return { id, ...data};
      });
    });
  }

  messageItem () {  //Devuelve todos los items se que han guardado en la coleccion items
    return this.items;
  }

  addItem(item:Item){
    this.itemsCollection.add(item);
  }


}
