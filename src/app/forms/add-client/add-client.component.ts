import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent {
  validEmail: boolean = true;



  constructor() {}

  validateEmail(event: any) {
    console.log(event.target.value);
    let email = event.target.value;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.validEmail = emailRegex.test(email);

    console.log(this.validEmail);
  }


}
