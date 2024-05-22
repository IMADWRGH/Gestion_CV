import {Component, OnInit} from '@angular/core';
import {prerenderPages} from "@angular-devkit/build-angular/src/utils/server-rendering/prerender";
import {IUser} from "../../../../share/models/user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {ISkill} from "../../../../share/models/skill.model";
import {ICandidat} from "../../../../share/models/candidat.model";
import {IEducation} from "../../../../share/models/education.model";
import {IExperience} from "../../../../share/models/experience.model";

@Component({
  selector: 'app-multi-step-registration',
  templateUrl: './multi-step-registration.component.html',
  styleUrls: ['./multi-step-registration.component.css']
})
export class MultiStepRegistrationComponent implements  OnInit{
  currentStep: number = 0;
  fieldsets: any[] = [0,1, 2, 3, 4]; // Initialize with 4 steps
  steps: string[] = ['User Account', 'Profile', 'Experience','Education'];

  password_confirmation!: string;
  user!:IUser;

  userSignupFormGroup !: FormGroup;
  candidatSignupFormGroup !: FormGroup;
  experienceSignupFormGroup !: FormGroup;
  educationSignupFormGroup !: FormGroup;
  skills:ISkill[]=[];
  selectedSkills: ISkill[] = [];

  public loginError!:String;
  isHovered: boolean = false;
  constructor(private  router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private authService: AuthService) {  }
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
    this.candidatSignupFormGroup= new FormGroup({
      profile: new FormControl('', [Validators.required, Validators.minLength(6)]),
      resume: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.userSignupFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required, Validators.minLength(6)]),
      profile_picture: new FormControl(File, [Validators.required, Validators.minLength(6)]),
      role: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.experienceSignupFormGroup=new FormGroup({
      company_name:new FormControl('', [Validators.required, Validators.minLength(6)]),
      job_title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      start_date: new FormControl('', [Validators.required, Validators.minLength(6)]),
      end_date: new FormControl('', [Validators.required, Validators.minLength(6)]),
      candidat_id: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.educationSignupFormGroup=new FormGroup({
      institute_name:new FormControl('', [Validators.required, Validators.minLength(6)]),
      degree: new FormControl('', [Validators.required, Validators.minLength(6)]),
      start_date: new FormControl('', [Validators.required, Validators.minLength(6)]),
      end_date: new FormControl('', [Validators.required, Validators.minLength(6)]),
      candidat_id: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  addSkill(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedSkill = this.skills.find(skill => skill.name === selectedValue);
    if (selectedSkill && !this.selectedSkills.includes(selectedSkill)) {
      this.selectedSkills.push(selectedSkill);
    }
  }
  removeSkill(skill: ISkill) {
    this.selectedSkills = this.selectedSkills.filter((s:ISkill) => s !== skill);
  }

  next() {
    if (this.currentStep==0 && this.userSignupFormGroup.invalid){
      if (this.password_confirmation == this.userSignupFormGroup.value.password){
        console.log(this.userSignupFormGroup.value);
        this.http.get("http://localhost:3003/skills").subscribe((response: any) => {
          this.skills=response as ISkill[];
          console.log("this.skills: "+this.skills);
        })
      }else{
        alert("Passwords don't match");
        return;
      }
    }
    if (this.currentStep==1 && this.userSignupFormGroup.invalid){
      console.log(this.candidatSignupFormGroup.value)

    }
    if (this.currentStep==2 && this.experienceSignupFormGroup.invalid) {
      console.log(this.experienceSignupFormGroup.value)
    }
    if (this.currentStep==3 && this.experienceSignupFormGroup.invalid) {
      console.log(this.educationSignupFormGroup.value)
    }
    if (this.currentStep==4 && this.experienceSignupFormGroup.invalid) {
        this.http.post<IUser>("http://localhost:3003/users", this.userSignupFormGroup.value)
                 .subscribe((user: IUser) => {
           if (user.id){
             this.http.post<IEducation>("http://localhost:3003/educations",this.educationSignupFormGroup.value)
             .subscribe((education: IEducation) => {
               if (education.id){
                 this.http.post<IExperience>("http://localhost:3003/experiences",this.experienceSignupFormGroup.value)
                   .subscribe((experience:IExperience) =>{
                    if (experience.id){
                      const candidat = {
                        user: user,
                        ... this.candidatSignupFormGroup.value,
                        skills: this.selectedSkills,
                        education:[education],
                        experiences:[experience],
                      }
                      console.log("After Candidat Registration: ", candidat);
                      this.http.post<ICandidat>("http://localhost:3003/candidats", candidat)
                        .subscribe((response: ICandidat) => {
                          console.log(response);
                        });
                    }
                   })

               }
             })
           }
        });
    }

    if (this.currentStep < this.fieldsets.length) {
      this.currentStep++;
      this.setProgressBar(this.currentStep);
    }
  }

  previous() {
    if (this.currentStep > 0) {
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

