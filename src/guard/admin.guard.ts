import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const etat = localStorage.getItem('stateElectionUser');
  if (etat == "connectedAdmin") {
    return true;
  }
  else {
    router.navigate(['/adminlogin'])
    return false;
  }};
