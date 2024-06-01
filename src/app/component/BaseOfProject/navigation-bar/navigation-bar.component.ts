import { Component } from '@angular/core';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  constructor(public BasicAuth: AuthorizationServiceService, private router: Router, private authService: AuthorizationServiceService) {}

  logout() {
    this.BasicAuth.clearAll();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.authService.getAuthLevel() === 1;
  }

  isLogged(): boolean {
    return this.BasicAuth.isLogged();
  }

  handleLoginClick() {
    if (this.isLogged()) {
      const userId = this.BasicAuth.loggedUser();
      this.router.navigate([`/welcome/${userId}`]);
    } else {
      this.router.navigate(['/login']);
    }
  }
}