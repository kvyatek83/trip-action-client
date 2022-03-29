import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Gender, User } from 'src/app/types/types';
import { Predicate } from '../../types/types';
import { ClientOption } from '../client-option';

@Component({
  selector: 'app-gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.scss'],
})
export class GenderFilterComponent extends ClientOption {
  genderTerm = new FormControl('All');
  genderList = ['All', ...Object.values(Gender)];

  get predicate(): Observable<Predicate> {
    return this.genderTerm.valueChanges.pipe(
      startWith(this.genderTerm.value),
      map((gender) => (users: User[]) => {
        if (!gender || gender === 'All') {
          return users;
        }

        return users.filter((user) => user.gender === gender);
      })
    );
  }
}
