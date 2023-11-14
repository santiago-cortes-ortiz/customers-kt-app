import { Component } from '@angular/core';
import { Person } from '../../models/person.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {

  personForm!: FormGroup;
  
  constructor(private _personService: PersonService) {
    this.initializeForm();
  }

  initializeForm() {
    this.personForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
    });
  }

  addPerson() {
    if (this.personForm.valid) {
      const formValues = this.personForm.getRawValue();
      const personToSave: Person = {
        name: formValues.name!,
        lastName: formValues.lastName!,
        age: Number(formValues.age),
        birthdate: formValues.birthdate!,
      }
      this._personService.addPerson(personToSave)
      .subscribe({
        next: (person) => console.log(person),
        error: (err) => console.log(err),
        complete: () => console.log('Completed')
      }); 
    } else {
      this.openModalError();
    }
  }

  openModalError() {
    const modalContent = "El formulario no es válido. Por favor, revisa los campos e inténtalo de nuevo.";
    window.alert(modalContent);
  }
}

