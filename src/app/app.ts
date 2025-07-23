import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header';
// import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
// import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'first-angular-app';
  userList = DUMMY_USERS;

  selectedUserId?: string;
  // console.log(selectedUserId.get);

  get getSelectUser() {
    console.log('got this ' + this.selectedUserId);
    return this.userList.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log('id Selected : -' + id);
    this.selectedUserId = id;
  }
}
