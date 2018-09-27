import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
// import { FlashMessageService } from 'angular2-flash-message';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    // public flashMensaje: FlashMessageService
   ) { }


  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registrerUser(this.email, this.password)
    .then((res) => {
      // this.flashMensaje.show('Usuario creado correctamente',
      // {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privatepage']);
      console.log('ok');
      console.log(res);
    }).catch ((err) => {
      // this.flashMensaje.show(err.message,
      // {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
    });
  }
}
