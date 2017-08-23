import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  people$;
  constructor(private peopleService: PeopleService) {}

  fetchPeople() {
    this.people$ = this.peopleService.fetchPeople();
  }
}
