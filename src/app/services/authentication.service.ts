import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserEntityProfileDto} from '../models/user-profile.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private baseUrl = environment.apiBaseUrl;
  private user: UserEntityProfileDto | null = null;

  constructor(private httpClient:HttpClient) {
    const stored = sessionStorage.getItem('user');
    if (stored) {
      this.user = JSON.parse(stored);
    }
  }

  public authenticate(username:string,password:string):Observable<UserEntityProfileDto>{
    return this.httpClient.post<UserEntityProfileDto>(`${this.baseUrl}/auth`,{
      username : username,
      password : password
    });
  }

  public setUser(user: UserEntityProfileDto) {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): UserEntityProfileDto | null {
    if (this.user) return this.user;
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  }

  public logout() {
    this.user = null;
    sessionStorage.clear();
  }

  public isLoggedIn(): boolean {
    return !!this.getUser();
  }

  public getToken(): string | null {
    return null;
  }
}
