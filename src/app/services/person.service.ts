import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _apiUrl = environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }

  getPeople():Observable<Person[]> {
    return this._httpClient.get<Person[]>(`${this._apiUrl}/customers`);
  }

}
