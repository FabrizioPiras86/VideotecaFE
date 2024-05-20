import { Component } from '@angular/core';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-prefilm',
  templateUrl: './prefilm.component.html',
  styleUrl: './prefilm.component.css'
})
export class PrefilmComponent {

  constructor(private authService: AuthorizationServiceService) {}

  isAdmin():boolean {
    return this.authService.getAuthLevel() ===1;
  }

}
