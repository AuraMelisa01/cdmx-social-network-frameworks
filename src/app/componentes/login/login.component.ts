import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import * as firebase from 'firebase/app';
// import { log } from 'util';
// import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public email: string;
  public password: string;

  constructor(
    private fb: FormBuilder,
    title: Title,
    public authService: AuthService,
    public router: Router,
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

   onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/privatepage']);
    }).catch( (err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  onClickGoogle() {
    this.authService.loginGoogle()
    .then((res) => {
      this.router.navigate(['/privatepage']);
    }).catch( err => console.log(err.message));
  }

  onClickFacebook() {
    this.authService.loginFacebook()
    .then((res) => {
      this.router.navigate(['/privatepage']);
    }).catch( err => console.log(err.message));
  }

}



