import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formfieldlogin',
  templateUrl: './formfieldlogin.component.html',
  styleUrls: ['./formfieldlogin.component.css']
})
export class FormfieldloginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
            
  }

  constructor() { }

  ngOnInit() {
  }

}

