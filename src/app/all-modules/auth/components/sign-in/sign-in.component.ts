import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public loginError!:String;
  constructor(private  router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {

    }
  }

  signup() {
    console.log("click buttom ...")
    this.router.navigate(['/auth/signup']);
  }
}
