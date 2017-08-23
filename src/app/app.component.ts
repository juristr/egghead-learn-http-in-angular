import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  people;
  message;
  constructor(private peopleService: PeopleService) {}

  fetchPeople() {
    this.peopleService
      .fetchPeople()
      .subscribe(
        (data) => {
          this.message = null;
          this.people = data;
        },
        (err: HttpErrorResponse) => {
          if (err instanceof Error) {
            // client-side error
            this.message = `An error occured ${err.error.message}`;
          } else {
            this.message = `Backend returned error code ${err.status}, body was: ${err.message}`;
          }
        }
      );
  }
}
