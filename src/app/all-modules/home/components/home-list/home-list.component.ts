import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IJob } from 'src/app/share/models/job.model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent {
  @Input() jobs: IJob[] = [];

}
