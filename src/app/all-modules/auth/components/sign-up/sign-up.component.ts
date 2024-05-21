import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {ISkill} from "../../../../share/models/skill.model";
import {IJob} from "../../../../share/models/job.model";
import {ICompany} from "../../../../share/models/company.model";
import {ISave} from "../../../../share/models/save.model";
import {IExperience} from "../../../../share/models/experience.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  selectedSkills: ISkill[] = [];
  skills:ISkill[]=[];
  jobs:IJob[]=[];
  companies:ICompany[]=[];
  save:ISave[]=[];
  experiences:IExperience[]=[];

  skillsForm!: FormGroup;
  experiencesFormGroup: FormGroup=new FormGroup({
    full_name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    profile: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  companiesFormGroup: FormGroup=new FormGroup({
    company_name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    candidat_id: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  educationFormGroup: FormGroup=new FormGroup({
    institute_name:new FormControl('', [Validators.required, Validators.minLength(6)]),
    degree: new FormControl('', [Validators.required, Validators.minLength(6)]),
    start_date: new FormControl('', [Validators.required, Validators.minLength(6)]),
    end_date: new FormControl('', [Validators.required, Validators.minLength(6)]),
    candidat_id: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  candidatSignupFormGroup = new FormGroup({
    profile: new FormControl('', [Validators.required, Validators.minLength(6)]),
    resume: new FormControl(null,[]),
    save: new FormControl('', []),
    skills: new FormControl([], []),
    educations: this.educationFormGroup,
    experiences: this.experiencesFormGroup,
    jobs: new FormControl([], []),
  })

  public loginError!:String;
  isHovered: boolean = false;
  constructor(private  router: Router,
              private activatedRouter: ActivatedRoute,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private authService: AuthService) {

  }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((params: ParamMap) => {
      console.log('ID:',  params.get('id'));
    });
    this.http.get("http://localhost:3000/skills").subscribe((response: any) => {
      this.skills=response as ISkill[];
      this.skills.forEach(value => {
        console.log(value);
      })
      console.log("this.skills: "+this.skills);
    })
    this.http.get("http://localhost:3000/experiences").subscribe((response: any) => {
      this.experiences=response;
      console.log("this.experiences: "+this.experiences);

    })
    this.http.get("http://localhost:3000/companies").subscribe((response: any) => {
      this.companies=response;
      console.log("this.companies: "+this.companies);
    })
    this.http.get("http://localhost:3000/jobs").subscribe((response: any) => {
      this.jobs=response;
      console.log("this.companies: "+this.jobs);

    })
  }
  addSkill(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedSkill = this.skills.find(skill => skill.name === selectedValue);

    if (selectedSkill && !this.selectedSkills.includes(selectedSkill)) {
      this.selectedSkills.push(selectedSkill);
    }

    // Reset the select element
    this.candidatSignupFormGroup.controls['skills'].reset();
  }

  removeSkill(skill: ISkill) {
    this.selectedSkills = this.selectedSkills.filter((s:ISkill) => s !== skill);
  }

}
