import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  interval,
  map,
  Observable,
  shareReplay,
  switchMap,
} from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/types/types';
import { environment } from 'src/environments/environment';
import { Predicate } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class ClientOptionsService {
  users$: Observable<User[]>;
  _clientsOptions$ = new BehaviorSubject<Observable<Predicate>[]>([]);

  constructor(private usersService: UsersService) {
    this.users$ = combineLatest([
      interval(environment.userInterval).pipe(
        switchMap(() => this.usersService.getAllUsers())
      ),
      this._clientsOptions$.pipe(
        switchMap((clientsOptions) =>
          combineLatest(clientsOptions).pipe(map((options) => options))
        )
      ),
    ]).pipe(
      map(([users, options]) => {
        return { users, options };
      }),
      map(({ users, options }) => {
        let userList = users;

        options.forEach((option) => {
          userList = option(userList);
        });

        return userList;
      })
    );
  }

  addPredicate(predicate: Observable<Predicate>): void {
    this._clientsOptions$.next([
      ...this._clientsOptions$.value,
      predicate.pipe(shareReplay()),
    ]);
  }
}
