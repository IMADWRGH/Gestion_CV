import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {InterceptorGuardService} from "../auth/interceptor-guard.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: InterceptorGuardService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Implement your authorization logic here
    if (this.authService.isAuthenticated()) {
      return true; // Allow loading the module if the user is authenticated
    } else {
      return true; // Block loading the module if the user is not authenticated
    }
  }
}
