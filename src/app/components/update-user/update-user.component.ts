import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private addService: AddService) { }

  ngOnInit(): void {
  }
  message: string = '';

  update(username: string, password: string, email: string) {

    this.addService.update(username, password, email,).subscribe(
      (response) => {
        // navigates us back to the main page
        // this.router.navigate(['']);
      },
      err => {
        this.message = err.console.error();
        ;
      }
    );

  }

}
