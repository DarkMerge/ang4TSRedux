import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  heroForm = new FormGroup ({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
