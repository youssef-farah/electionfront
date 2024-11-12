import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private apiUrl = 'http://localhost:4005/api'; // Adjust to your backend URL

  constructor(private http: HttpClient) { }

  // GET all candidats 
  getCandidats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // GET a single candidat by ID
  getCandidat(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  // POST to add a new candidat
  addCandidat(candidatData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, candidatData);
  }

  // PUT to update an existing candidat by ID
  updateCandidat(id: string, candidatData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, candidatData);
  }

  // DELETE a candidat by ID
  deleteCandidat(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }


  getFavoris(): Observable<any> {
    console.log(localStorage.getItem('userId'));
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error("User is not logged in");
    }
    return this.http.get(`${this.apiUrl}/users/${userId}/fav`);
  }

  addInFavoris(userId: string, candidatId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${userId}/favoris/${candidatId}`, {});
  }

  addVote(userId: string, candidatId: string): Observable<any> {
    const url = `${this.apiUrl}/addVote`;
    const body = { userId, candidatId };
    return this.http.post(url, body);
  }

  // Remove a vote for a specific candidate
  removeVote(userId: string, candidatId: string): Observable<any> {
    const url = `${this.apiUrl}/removeVote`;
    const body = { userId, candidatId };
    return this.http.post(url, body);
  }



}
