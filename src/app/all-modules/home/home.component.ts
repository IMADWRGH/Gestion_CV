import { Component, ViewChild } from '@angular/core';
import { HomeService } from './service/home.service';
import { IJob } from 'src/app/share/models/job.model';
import { HomeSearchComponent } from './components/home-search/home-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(HomeSearchComponent)
  homeSearchComponent!: HomeSearchComponent;
  jobs: IJob[] = [];
  constructor(private service: HomeService) { }

  getJob(): void {
    const title = this.homeSearchComponent.form.get('title')?.value;
    const city = this.homeSearchComponent.form.get('city')?.value;
    this.service.searchJobs(title, city).subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  // getJob(title?: string, city?: string): void {
  //   this.service.searchJobs(title, city).subscribe({
  //     next: (data) => {
  //       this.jobs = data
  //       console.log("data:" + data);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log('completed');
  //     }
  //   });
  // }

}
