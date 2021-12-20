import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recaptcha-login',
  templateUrl: './recaptcha-login.component.html',
  styleUrls: ['./recaptcha-login.component.css']
})
export class RecaptchaLoginComponent implements OnInit {
  public aFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  siteKey:string = "6LdKmLgdAAAAADJvAUk94CTHsIUUjUIPnfdp0EGf";
}
