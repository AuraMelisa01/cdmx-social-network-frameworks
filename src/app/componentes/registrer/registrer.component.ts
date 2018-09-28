import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { FlashMessageService } from 'angular2-flash-message';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
  loginForm: FormGroup;
  public email: string;
  public password: string;

  constructor(
    private fb: FormBuilder,
    title: Title,
    public authService: AuthService,
    public router: Router,
    // public flashMensaje: FlashMessageService
   ) {
    title.setTitle('Login Angular 6');
    this.buildForm();
   }

   buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  ngOnInit() {
  }

  submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
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
