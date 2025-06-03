import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserEntityProfileDto} from '../models/user-profile.model';
import {EMPTY, map, Observable, of, tap} from 'rxjs';
import {TokenService} from './token.service';
import {JwtTokenResponse} from '../models/jwt-token-response.model';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private baseUrl = environment.apiBaseUrl;
  private user!: UserEntityProfileDto | null;
  private profileImageUrl: string | null = null;
  private role!: string;

  constructor(private httpClient:HttpClient,
              private tokenService: TokenService,
              private userService: UserService) {
    this.tokenService.getToken()
  }

  public restore(){
    this.tokenService.getToken()
    this.role = this.tokenService.getRole()
    const username = this.tokenService.getUsername();
    if (!username) return EMPTY;

    return this.userService.getMyProfile().pipe(
      tap(user => {
        this.user = user;
      })
    )
  }

  public authenticate(username:string,password:string,selectedRole:string):Observable<JwtTokenResponse>{
    return this.httpClient.post<JwtTokenResponse>(`${this.baseUrl}/auth`,{
      username : username,
      password : password,
      selectedRole : selectedRole
    });
  }

  public setUser(token: JwtTokenResponse): Observable<UserEntityProfileDto> {
    this.tokenService.setToken(token)
    this.role = this.tokenService.getRole()
    const username = this.tokenService.getUsername();
    if (!username) return EMPTY;

    return this.userService.getMyProfile().pipe(
      tap(user => {
        this.user = user;
      })
    );
  }

  public getUser(): UserEntityProfileDto {
    if (!this.user) {
      throw new Error("User not set");
    }
    return this.user;
  }

  public logout() {
    this.user = null;
    this.role = "";
    sessionStorage.clear();
  }

  public isLoggedIn(): boolean {
    return !!this.tokenService.getToken();
  }

  public getRole(){
    return this.role;
  }

  public hasRole(role : string) {
    return this.role === role;
  }

  public getProfilePicture(): Observable<string> {
    if(!this.profileImageUrl){
      return this.httpClient.get(`${this.baseUrl}/users/picture`, {
        responseType: 'blob'
      }).pipe(
        map(blob => {
          this.profileImageUrl = URL.createObjectURL(blob);
          return this.profileImageUrl;
        })
      );
    }
    else{
      return of(this.profileImageUrl);
    }
  }

  public clearCachedProfileImage() {
    if (this.profileImageUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(this.profileImageUrl);
    }
    this.profileImageUrl = null;
  }
}
