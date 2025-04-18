import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';

export const viewGuard: CanActivateChildFn = (childRoute, state) => {
return true;
};
