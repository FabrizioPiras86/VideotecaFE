import { Component } from '@angular/core';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {


  constructor(public BasicAuth: AuthorizationServiceService, private router: Router) {}

  login() {
    const userId = 'pippo';
    const password = '1234';

    const isAuth = this.BasicAuth.autentica(userId,password);

    if(isAuth){
      this.router.navigate(['/welcome', userId]);
    }else{
      console.log('Credenziali non valide');
    }
  }

  logout(){
    this.BasicAuth.clearAll();
    this.router.navigate(['/login']);
  }

}
