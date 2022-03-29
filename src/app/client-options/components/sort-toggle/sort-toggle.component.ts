import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { User } from 'src/app/types/types';
import { Predicate } from '../../types/types';
import { ClientOption } from '../client-option';

@Component({
  selector: 'app-sort-toggle',
  templateUrl: './sort-toggle.component.html',
  styleUrls: ['./sort-toggle.component.scss'],
})
export class SortToggleComponent extends ClientOption {
  sortMethod = new FormControl(SortMethod.NONE);
  sortMethods = Object.values(SortMethod);

  get predicate(): Observable<Predicate> {
    return this.sortMethod.valueChanges.pipe(
      startWith(this.sortMethod.value),
      map((sortMethod) => (users: User[]) => {
        if (sortMethod === SortMethod.NONE) {
          return users;
        }

        return users.sort((currentUser: User, nextUser: User) => {
          if (sortMethod === SortMethod.ASC) {
            return this.getFullName(currentUser) < this.getFullName(nextUser)
              ? -1
              : 1;
          } else {
            return this.getFullName(currentUser) > this.getFullName(nextUser)
              ? -1
              : 1;
          }
        });
      })
    );
  }

  private getFullName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }
}

enum SortMethod {
  ASC = 'ASC',
  NONE = 'NONE',
  DSC = 'DSC',
}
