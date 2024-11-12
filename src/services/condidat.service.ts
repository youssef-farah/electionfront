import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

 
  private apiUrl = 'http://localhost:4005'; // Adjust to your backend URL

  constructor(private http: HttpClient) { }

  // GET all candidats 
  getCandidats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/candidats`);
  }

  // GET a single candidat by ID
  getCandidat(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/candidats/${id}`);
  }

  // POST to add a new candidat
  addCandidat(candidatData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/candidats`, candidatData);
  }

  // PUT to update an existing candidat by ID
  updateCandidat(id: string, candidatData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/candidats/${id}`, candidatData);
  }

  // DELETE a candidat by ID
  deleteCandidat(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/candidats/${id}`);
  }
}
