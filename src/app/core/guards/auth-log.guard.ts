import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authLogGuard: CanActivateFn = (route, state) => {
    let  auth = inject(AuthService)
    let router = inject(Router)
    if (auth.isAuthorized()||auth.getToken()) {
      router.navigateByUrl("/login");
      return false;
    }
    else{
      return true;
    }
};
