import {Component, OnInit} from '@angular/core';
import {prerenderPages} from "@angular-devkit/build-angular/src/utils/server-rendering/prerender";

@Component({
  selector: 'app-multi-step-registration',
  templateUrl: './multi-step-registration.component.html',
  styleUrls: ['./multi-step-registration.component.css']
})
export class MultiStepRegistrationComponent implements  OnInit{
  currentStep: number = 1;
  fieldsets: any[] = [1, 2, 3, 4]; // Initialize with 4 steps

  get progress(): number {
    return (this.currentStep / this.fieldsets.length) * 100;
  }

  ngOnInit() {
    this.setProgressBar(this.currentStep);
  }

  next() {
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
}

