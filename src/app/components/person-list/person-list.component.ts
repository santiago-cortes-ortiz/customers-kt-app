import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  
  people: Person[] = []

  constructor(private _personService: PersonService) { }

  ngOnInit(): void {
    this._personService.getPeople()
    .subscribe({
      next: (people) => this.people = people,
      error: (err) => console.log(err),
      complete: () => console.log('Completed')
    });
  }

}
