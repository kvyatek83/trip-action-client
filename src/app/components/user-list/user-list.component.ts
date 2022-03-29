import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() users: User[];

  trackByUserId(_: number, user: User): number {
    return user.id;
  }
}
