import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { type User } from './user.model';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }
  // @Input({ required: true}) id!: string;
  // @Input({ required: true}) avatar!: string;
  // @Input({ required: true}) name!: string;
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();     Here is the signal input method to use
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // selectedUser = DUMMY_USERS[randomIndex]; State way
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }
  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex]; This is state way to run the code
  }
}
