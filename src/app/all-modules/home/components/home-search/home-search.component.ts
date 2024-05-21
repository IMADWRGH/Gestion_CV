import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  @Output() search = new EventEmitter<{ title: string, city: string }>();

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  searchJob() {
    this.search.emit(this.form.value);
    console.log("test from " + this.search.emit(this.form.value));

  }


}
