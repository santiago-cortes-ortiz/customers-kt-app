import { Component } from '@angular/core';
import { Person } from '../../models/person.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {
  personForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    birthdate: new FormControl(''),
  });
  
  addPerson() {
    console.log(this.personForm.value);
  }
}
