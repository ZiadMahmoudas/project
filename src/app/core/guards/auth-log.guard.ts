import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authLogGuard: CanActivateFn = (route, state) => {
  return true;
};
