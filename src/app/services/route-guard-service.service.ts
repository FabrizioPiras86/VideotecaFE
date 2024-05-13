import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizationServiceService } from './authorization-service.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService  {

  constructor(private BasicAuth: AuthorizationServiceService, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.BasicAuth.isLogged()) {
      this.route.navigate(['login']);
      return false;
    } else {
      return true;
    }

  }
}
