import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<Person> {
    // const params = new HttpParams()
    //   .set('id', '2')
    //   .set('includeName', 'false');

    // return this.http
    //   .get<Person>('/api/v1/people', {
    //     params: params
    //   });
    return this.http
      .post<Person>('/api/v1/people', { name: 'Pete'} );
  }

}
