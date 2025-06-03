import { HttpInterceptorFn } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import {inject} from '@angular/core';
import {TokenService} from './services/token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);

  if(tokenService.getToken()){
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer `+ tokenService.getToken()
      }
    });

    return next(cloned);
  }
  else{
    return next(req);
  }


};
