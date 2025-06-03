import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {UserEntityProfileDto} from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public getUserByUserName(username: string):Observable<UserEntityProfileDto> {
      return this.httpClient.get<UserEntityProfileDto>(`${this.baseUrl}/users/${username}`);
  }

  public createUser(user: any):Observable<UserEntityProfileDto> {
      return this.httpClient.post<UserEntityProfileDto>(`${this.baseUrl}/users`, user);
  }

  public getMyProfile():Observable<UserEntityProfileDto> {
    return this.httpClient.get<UserEntityProfileDto>(`${this.baseUrl}/users`);
  }
}
