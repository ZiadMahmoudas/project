import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authLogGuard: CanActivateFn = (route, state) => {
    let  auth = inject(AuthService)
    let router = inject(Router)
    if(auth.getToken()){
      router.navigateByUrl("/Home");
      return false;
    }
    else{
      return true;
    }
};
