import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: boolean): boolean {
    console.log(signInData);

    if (signInData == true) {
      this.isAuthenticated = true;
      console.log("LELE");

      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
