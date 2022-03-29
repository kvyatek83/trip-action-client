import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly USER_DATA_PATH = 'assets/users.json';

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<any[]>(this.USER_DATA_PATH).pipe(
      map((users) =>
        users.map(
          (user) =>
            ({
              ...user,
              firstName: user['first_name'],
              lastName: user['last_name'],
            } as User)
        )
      )
    );
  }
}
