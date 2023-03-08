import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  formTable: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formTable = this.fb.group({
      clientId: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
    });
  }
}
