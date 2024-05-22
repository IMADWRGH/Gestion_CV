import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorGuardService {

  constructor() { }

  isAuthenticated() {
    return true;
  }
}
