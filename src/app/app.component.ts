import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Little Pony';
  currentUser = new User('toto');
  identifiant: string;
  connect: boolean;

  constructor() {
    if (sessionStorage.getItem('user') !== null) {
      this.connect = true;
      this.identifiant = sessionStorage.getItem('user');
    } else {
      this.connect = false;
      this.identifiant = 'Anonymous';
    }
  }

  onSubmitConnection() {
    if (sessionStorage.getItem('user') === null) {
      sessionStorage.setItem('user', this.currentUser.loging);
      this.connect = true;
      this.identifiant = sessionStorage.getItem('user');
    }
  }

  onSubmitDeconnection() {
    if (sessionStorage.getItem('user') !== null) {
      sessionStorage.removeItem('user');
      this.connect = false;
      this.identifiant = sessionStorage.getItem('user');
      this.identifiant = 'Anonymous';
    }
  }
}
