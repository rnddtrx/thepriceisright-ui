import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authenticationService = inject(AuthenticationService);

  if(authenticationService.isLoggedIn()){
    return true;
  }
  router.navigate(['/']);
  return false;

};
