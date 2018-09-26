import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

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
    public router: Router ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registrerUser(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/privatepage'])
      console.log("okkk");
      console.log(res);
    }).catch ((err) => {
      console.log(err);
    });
  }
}
