import { Component, OnInit } from '@angular/core';
import { MuroservService } from '../../servicios/muroserv.service';


@Component({
  selector: 'app-muro-add',
  templateUrl: './muro-add.component.html',
  styleUrls: ['./muro-add.component.css']
})
export class MuroAddComponent implements OnInit {
  item:any = {
    post:""
  }

    constructor(private muroservService: MuroservService) { }

  ngOnInit() {
  }

  addMessage(){
    this.muroservService.addItem(this.item);
    this.item.post = "";
  }



}
