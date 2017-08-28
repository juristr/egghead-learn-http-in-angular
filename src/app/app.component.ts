import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Testing the new Angular HttpClient</h2>
    </div>

    <button (click)="fetchPeople()">Fetch people</button>
    <button (click)="raiseHttpError()">Raise http error</button>

    <hr />

    List of people

    <ul>
      <li *ngFor="let person of people$ | async">{{ person.name }}</li>
    </ul>
  `
})
export class AppComponent {
  people$;

  constructor(private http: HttpClient) { }

  fetchPeople() {
    this.people$ = this.http.get('/assets/data/people.json');
  }

  raiseHttpError() {
    this.people$ = this.http.get('/assets/data/unavailableendpoint.json');
  }
}
