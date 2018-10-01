import { Component, OnInit } from '@angular/core';
import { MuroService } from '../../servicios/muro.service';


@Component({
  selector: 'app-muro-add',
  templateUrl: './muro-add.component.html',
  styleUrls: ['./muro-add.component.css']
})
export class MuroAddComponent implements OnInit {
  item:any = {
    post:""
  }

  constructor(private muroService: MuroService) { }

  ngOnInit() {
  }

  addMessage(){
    this.muroService.addItem(this.item);
    this.item.post = "";
  }

}
