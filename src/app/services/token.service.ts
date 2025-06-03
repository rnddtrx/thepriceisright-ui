import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import {JwtTokenResponse} from '../models/jwt-token-response.model';

interface JwtPayload {
  sub: string;
  exp: number;
  iat: number;
  roles: string;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private token: string | null | undefined;

  public setToken(token: JwtTokenResponse) {
    this.token = token.token;
    sessionStorage.setItem('token',this.token);
  }

  public getToken(): string | null | undefined{
    if(!this.token){
      if (sessionStorage.getItem('token')){
        this.token = sessionStorage.getItem('token')
      }
    }
    return this.token;
  }

  getRole(): string {
    if(!this.getToken())
      return "";

    try {
      const decoded = jwtDecode<{ role?: string }>(<string>this.getToken());
      return decoded.role ?? "";
    } catch (e) {
      return "";
    }
  }

  getUsername(): string | null {
    if(!this.getToken())
      return null;

    try {
      const decoded = jwtDecode<{ sub?: string }>(<string>this.getToken());
      return decoded.sub ?? null;
    } catch (e) {
      return null;
    }
  }
}
