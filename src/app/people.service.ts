import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<Object> {
    return this.http
      // .get('/assets/data/people.json');
      .get('/assets/data/unavailable.json');
  }

}
