import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './service/home.service';
import { IJob } from 'src/app/share/models/job.model';
import { HomeSearchComponent } from './components/home-search/home-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(HomeSearchComponent)
  homeSearchComponent!: HomeSearchComponent;
  jobs: IJob[] = [];
  json!: string;
  constructor(private service: HomeService) { }


  ngOnInit(): void {
    const json = localStorage.getItem("data");
    if (json) {
      this.jobs = JSON.parse(json);
    } else { }
  }

  getJob(): void {
    const title = this.homeSearchComponent.form.get('title')?.value;
    const city = this.homeSearchComponent.form.get('city')?.value;
    this.service.searchJobs(title, city).subscribe((data) => {
      this.jobs = data
      console.log("data :" + this.jobs);

      localStorage.setItem("data", JSON.stringify(this.jobs));
    });
  }

  // ngOnInit() {

  // }

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
