import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-project-angular';
  password = 'Murat';

  buttonClick() {
    this.password = "test";
    console.log("Event Bindingi ögreniyoruz");
  }

  getPassword () {
    return this.password;
  }
}
