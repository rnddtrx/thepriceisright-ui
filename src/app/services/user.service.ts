import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public getUserByUserName(username: string):Observable<User> {
      return this.httpClient.get<User>(`${this.baseUrl}/users/${username}`);
  }

  public createUser(user: any):Observable<User> {
      return this.httpClient.post<User>(`${this.baseUrl}/users`, user);
  }
}
