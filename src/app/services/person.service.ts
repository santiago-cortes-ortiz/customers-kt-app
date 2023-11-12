import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _apiUrl = environment.apiUrl;
  private _people = new BehaviorSubject<Person[]>([]);

  constructor(private _httpClient: HttpClient) {
    this.fetchPeople();
  }

  fetchPeople() {
    this._httpClient.get<Person[]>(`${this._apiUrl}/customers`).subscribe(
      people => this._people.next(people)
    );
  }

  getPeopleObservable(): Observable<Person[]> {
    return this._people.asObservable();
  }

  addPerson(person: Person):Observable<Person> {
    return this._httpClient.post<Person>(`${this._apiUrl}/customers`, person)
    .pipe(
      tap(() => this.fetchPeople())
    );
  }

}
