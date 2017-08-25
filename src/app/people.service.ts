import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<HttpResponse<Person>> {
    return this.http
      .get<Person>('/api/v1/people', { observe: 'response'});
  }

}
