import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userKey = 'currentUser';

  login(username: string, password: string): void {
    // Simulação de chamada de API para autenticação
    if (username === 'user' && password === 'pass') {
      const user = { username: username };
      sessionStorage.setItem(this.userKey, JSON.stringify(user));
    } else {
      console.error('Login falhou');
    }
  }

  logout(): void {
    sessionStorage.removeItem(this.userKey);
  }

  getCurrentUser(): any {
    const userJson = sessionStorage.getItem(this.userKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
