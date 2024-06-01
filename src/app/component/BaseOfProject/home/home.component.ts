import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthorizationServiceService, private router: Router) { }

  onGetStarted() {
    if (this.authService.isLogged()) {
      this.router.navigate(['/welcome/:userId']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}