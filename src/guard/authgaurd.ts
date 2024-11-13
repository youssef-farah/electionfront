import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const etat = localStorage.getItem('stateElectionUser');
  console.log(1)
  if (etat == "connectedUser") {
    return true;
  }
  else {
    router.navigate(['/login'])
    return false;
  }
};
