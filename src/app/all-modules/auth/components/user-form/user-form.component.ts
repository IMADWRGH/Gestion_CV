import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {IUser} from "../../../../share/models/user.model";
import {ISkill} from "../../../../share/models/skill.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  password_confirmation!: string;
  user!:IUser;

  userSignupFormGroup = new FormGroup({
    id: new FormControl(Number, [Validators.required, Validators.minLength(6)]),
    full_name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    profile_picture: new FormControl(File, [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  public loginError!:String;
  isHovered: boolean = false;
  constructor(private  router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private authService: AuthService) {

  }
  ngOnInit(): void {

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
}
