import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loginForm = new FormGroup({
    full_name: new FormControl('', [Validators.required, Validators.email]),
    profile: new FormControl('', [Validators.required, Validators.email]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.email]),
    resume: new FormControl('', [Validators.required, Validators.email]),
    profile_picture: new FormControl(File, [Validators.required, Validators.email]),
    save: new FormControl('', [Validators.required, Validators.email]),
    skills: new FormControl('', [Validators.required, Validators.email]),
    experiences: new FormControl('', [Validators.required, Validators.email]),
    educations: new FormControl('', [Validators.required, Validators.email]),
    jobs: new FormControl('', [Validators.required, Validators.email]),
  })

  public loginError!:String;
  constructor(private  router: Router, private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService) { }

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
