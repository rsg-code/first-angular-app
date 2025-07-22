import {
  Component,
  signal,
  computed,
  Input,
  input,
  Output,
  output,
  EventEmitter,
} from '@angular/core';

import { type Users } from './user.model';
import { Card } from '../shared/card/card';
// type users = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) users!: Users;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  getImagePath() {
    return 'assets/users/' + this.users.avatar;
  }

  onSelectUser() {
    this.select.emit(this.users.id);
  }
}
// avatar = input.required<string>();
// name = input.required<string>();

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// });

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// export class User {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//   onClickEvent() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }
