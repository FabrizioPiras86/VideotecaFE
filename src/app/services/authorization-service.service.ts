import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {

  private loginUrl = 'http://localhost:8080/api/utente/login';
  private registerUrl = 'http://localhost:8080/api/utente/register';

  constructor(private http: HttpClient) { }

  autentica(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      map(response => {
        if (response && response.token) {
          sessionStorage.setItem('Utente', response.userId);
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem("autorizzazione", response.auth)
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  setLoggedUser(username: string): void {
    sessionStorage.setItem('Utente', username);
  }

  loggedUser = (): string | null => sessionStorage.getItem('Utente');

  getAuthLevel = (): number => parseInt(sessionStorage.getItem('autorizzazione') || '10', 10);

  register(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.http.post(this.registerUrl, user);
  }

  isLogged = (): boolean => !!sessionStorage.getItem('Utente');

  clearUser(): void {
    sessionStorage.removeItem('Utente');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('autorizzazione');
  }

  clearAll = (): void => sessionStorage.clear();
}
