import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from './service/company.service';
import { IJob } from 'src/app/share/models/job.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  constructor(private router: Router, private service: CompanyService) { }
  job!: IJob;

  searchJob(name: string) {
    this.service.searchByName(name).subscribe({
      next: (data) => {
      }
    })
  }
}
