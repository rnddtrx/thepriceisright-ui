import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //const cloned = req.clone({
  //  setHeaders: {
  //    Authorization: `Bearer YOUR_TOKEN_HERE`
  //  }
  //});

  return next(req);
};
