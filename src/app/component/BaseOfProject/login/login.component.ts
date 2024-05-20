import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  autenticato: boolean = false;

  constructor(private router: Router, private BasicAuth: AuthorizationServiceService) { }

  ngOnInit(): void {}

  gestAuth() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.BasicAuth.autentica(this.username, this.password).subscribe(
      (success: boolean) => {
        if (success) {
          this.autenticato = true;
          this.BasicAuth.setLoggedUser(this.username);
          this.router.navigate(['welcome', this.username]);
        } else {
          this.router.navigate(['error']);
        }
      },
      (error) => {
        console.error('Authentication failed:', error);
        this.router.navigate(['error']);
      }
    );
  }
}
