import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob } from 'src/app/share/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_URL: string = "http://localhost:3000/Jobs"
  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.API_URL);
  }
  searchByName(name: string): Observable<IJob> {
    return this.http.get<IJob>(`${this.API_URL}/?name_like=${name}`);
  }
}
