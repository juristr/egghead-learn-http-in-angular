import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  output;
  constructor(private peopleService: PeopleService) {}

  uploadAvatar(fileUpload) {
    const formData = new FormData();
    formData.append('avatar', fileUpload.files[0], 'avatar.jpg');

    this.peopleService
      .uploadAvatar(formData)
      .subscribe(res => {
        if (res.type === HttpEventType.UploadProgress) {
          const percentage = Math.round(100 * res.loaded / res.total);

          this.output = `File is ${percentage}% uploaded`;
        } else if (res instanceof HttpResponse) {
          this.output = `File is completely uploaded`;
        }
      });

  }

}
