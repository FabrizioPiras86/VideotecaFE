import { Component } from '@angular/core';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-pregenere',
  templateUrl: './pregenere.component.html',
  styleUrl: './pregenere.component.css'
})
export class PregenereComponent {

  constructor(private authService: AuthorizationServiceService) {}

  isAdmin():boolean {
    return this.authService.getAuthLevel() ===1;
  }

}
