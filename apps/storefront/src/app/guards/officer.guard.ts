import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const officerGuard: CanActivateFn = () => {
    const router = inject(Router);
    const username = localStorage.getItem('username');
    if (username) {
        return true;
    }
    return router.parseUrl('/auth/login');
};
