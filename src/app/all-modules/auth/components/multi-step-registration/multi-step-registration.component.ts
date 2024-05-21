import {Component, OnInit} from '@angular/core';
import {prerenderPages} from "@angular-devkit/build-angular/src/utils/server-rendering/prerender";
import {IUser} from "../../../../share/models/user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-multi-step-registration',
  templateUrl: './multi-step-registration.component.html',
  styleUrls: ['./multi-step-registration.component.css']
})
export class MultiStepRegistrationComponent implements  OnInit{
  currentStep: number = 1;
  fieldsets: any[] = [1, 2, 3, 4]; // Initialize with 4 steps
  steps: string[] = ['','Account', 'Personal', 'Image', 'Finish'];

  password_confirmation!: string;
  user!:IUser;

  userSignupFormGroup !: FormGroup;

  public loginError!:String;
  isHovered: boolean = false;
  constructor(private  router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private authService: AuthService) {

  }
  saveUser() {
    console.log("Submitted...");
    console.log(this.userSignupFormGroup.value);
    if (this.password_confirmation == this.userSignupFormGroup.value.password) {
      this.http.post<IUser>("http://localhost:3000/users", this.userSignupFormGroup.value).subscribe((user: IUser) => {
        console.log(user);
        if (user.id)this.router.navigate(["auth/profile", {id: user.id}]);
      })
    }else {
      alert("Passwords don't match");
      this.userSignupFormGroup.get(['password'])?.reset();
      this.password_confirmation="";
    }
  }

  get progress(): number {
    return (this.currentStep / this.fieldsets.length) * 100;
  }

  ngOnInit() {
    this.setProgressBar(this.currentStep);
    this.userSignupFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required, Validators.minLength(6)]),
      profile_picture: new FormControl(File, [Validators.required, Validators.minLength(6)]),
      role: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  next() {
    if (this.currentStep==1 && this.userSignupFormGroup.invalid){
      if (this.password_confirmation == this.userSignupFormGroup.value.password){
        console.log(this.userSignupFormGroup.value);
      }else{
        alert("Passwords don't match");
        return;
      }
    }
    if (this.currentStep < this.fieldsets.length) {
      this.currentStep++;
      this.setProgressBar(this.currentStep);
    }
  }

  previous() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.setProgressBar(this.currentStep);
    }
  }

  setProgressBar(step: number) {
    const percent = (step / this.fieldsets.length) * 100;
  }
  setActiveStep(index: number): void {
    this.currentStep = index;
  }
}

