import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId: string = '';
  password: string = '';
  autenticato: boolean = false;

  constructor(private router: Router, private BasicAuth: AuthorizationServiceService) { }

  ngOnInit(): void {

  }
  gestAuth() {
    console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.autenticato = true;
      this.router.navigate(['welcome', this.userId]);
    } else {
      this.router.navigate(['error']);
    }
}
}


