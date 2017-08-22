import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<Object> {
    return this.http
      // .get('/assets/data/people.json');
      .get('/assets/data/unavailable.json')
      .retryWhen(err => err
        .do(val => Observable.throw(val))
        .delay(1000)
        .take(3)
      );
      // .retry(3);
      // .catch((err: HttpErrorResponse, caught: Observable<any>) => {
      //   console.log(err);
      //   // return caught;
      //   return Observable.throw(err);
      // });
  }

}
