import { Component } from '@angular/core';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-preinterprete',
  templateUrl: './preinterprete.component.html',
  styleUrl: './preinterprete.component.css'
})
export class PreinterpreteComponent {

  constructor(private authService: AuthorizationServiceService) {}

  isAdmin():boolean {
    return this.authService.getAuthLevel() ===1;
  }

}
