import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { User } from 'src/app/types/types';
import { Predicate } from '../../types/types';
import { ClientOption } from '../client-option';

@Component({
  selector: 'app-name-or-email-filter',
  templateUrl: './name-or-email-filter.component.html',
  styleUrls: ['./name-or-email-filter.component.scss'],
})
export class NameOrEmailFilterComponent extends ClientOption {
  searchTerm = new FormControl('');

  get predicate(): Observable<Predicate> {
    return this.searchTerm.valueChanges.pipe(
      startWith(this.searchTerm.value),
      map((searchTerm) => (users: User[]) => {
        if (!searchTerm) {
          return users;
        }

        return users.filter((user) => {
          return (
            this.findMatch(user.email, searchTerm) ||
            this.findMatch(`${user.firstName} ${user.lastName}`, searchTerm)
          );
        });
      })
    );
  }

  private findMatch(value: string, term: string): boolean {
    return value.toLocaleLowerCase().includes(term.toLocaleLowerCase());
  }
}
