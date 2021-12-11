import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { signupService } from 'src/app/service/signup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private signupService: signupService) {}
  
  profileForm = this.fb.group({
    userName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
   
  });
  onSubmit() {
    this.signupService
    console.log('form data is ', this.profileForm.value);
  }
 

  ngOnInit(): void {
  }

}
