import { Component } from '@angular/core';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-modificapersonale',
  templateUrl: './modificapersonale.component.html',
  styleUrl: './modificapersonale.component.css'
})
export class ModificapersonaleComponent {

  constructor(public authService: AuthorizationServiceService) {}
}
