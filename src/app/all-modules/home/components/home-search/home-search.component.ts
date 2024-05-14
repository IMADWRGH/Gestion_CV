import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent {
  form: FormGroup = new FormGroup({
    searchQuery: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.form = this.fb.group({
      searchQuery: ['all', Validators.required],
      location: ['all', Validators.required]
    })
  }

}
