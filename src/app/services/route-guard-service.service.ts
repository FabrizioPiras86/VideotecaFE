import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizationServiceService } from './authorization-service.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService  {

  constructor(private BasicAuth: AuthorizationServiceService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authLevel= this.BasicAuth.getAuthLevel();
    const requiredAuthLevel = route.data['requiredAuthLevel'];

    if(!this.BasicAuth.isLogged() || authLevel < requiredAuthLevel) {
      this.route.navigate(['login']);
      return false;
    } else {
      return true;
    }

  }
}
