import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable()

export class studAllow  implements CanActivate{
    
const canActivateTeam: CanActivate =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>  {
        return true
       }    
    
}