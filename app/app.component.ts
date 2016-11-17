import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/test.html'
})
export class AppComponent {
  img: any;
  constructor() {
    this.img = 'app/static/img/kramer-pimp.gif'
  }
  logImage() {
    console.log('My image is', this.img)
  }
}

