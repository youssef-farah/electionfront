import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
export class AuthentService {
  private apiUrl = 'http://localhost:4005/api/users/login'; // adjust to match your backend URL
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(cin: string, password: string): Observable<any> {
    this.isAuthenticated.next(true);

    return this.http.post<any>(this.apiUrl, { cin, password });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}*/



export class AuthentService {
  private apiUrl = 'http://localhost:4005/api/users/login';
  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  login(cin: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { cin, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.isAuthenticated.next(true);
        }
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
