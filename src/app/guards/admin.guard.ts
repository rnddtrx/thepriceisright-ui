import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authenticationService = inject(AuthenticationService);

  if(authenticationService.hasRole("ADMIN")){
    return true;
  }
  router.navigate(['/unauthorized']);
  return false;

};
