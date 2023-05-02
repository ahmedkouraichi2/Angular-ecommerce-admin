import { Injectable } from '@angular/core';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }


    public setRoles(roles: Role[]) {
      localStorage.setItem('roles', JSON.stringify(roles));
    }

    public getRoles(): Role[] | null {
      const rolesJson = localStorage.getItem('roles');
      if (!rolesJson) {
        return null;
      }
      try {
        const roles = JSON.parse(rolesJson);
        if (!Array.isArray(roles)) {
          throw new Error('Roles is not an array.');
        }
        return roles;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

    public setToken(jwtToken: string) {
      localStorage.setItem('jwtToken', jwtToken);
    }

    public getToken(): string | null {
      return localStorage.getItem('jwtToken');
    }

    public clear() {
      localStorage.clear();
    }

    public isLoggedIn(): boolean {
      return Boolean(this.getRoles() && this.getToken());
    }

    public isAdmin(): boolean {
      const roles: Role[] | null = this.getRoles();
      return roles !== null && roles.length > 0 && roles[0].roleName === 'Admin';
    }

    public isUser(): boolean {
      const roles: Role[] | null = this.getRoles();
      return roles !== null && roles.length > 0 && roles[0].roleName === 'User';
    }

  }
