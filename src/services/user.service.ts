import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private apiUrl = 'http://localhost:4005/api/users'; // Adjust to your backend URL

  constructor(private http: HttpClient) { }

  // GET all candidats 
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // GET a single candidat by ID
  getCandidat(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // POST to add a new candidat
  addCandidat(candidatData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, candidatData);
  }

  // PUT to update an existing candidat by ID
  updateCandidat(id: string, candidatData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, candidatData);
  }

  // DELETE a candidat by ID
  deleteCandidat(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  getFavoris(): Observable<any> {
    
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error("User is not logged in");
    }
    return this.http.get(`${this.apiUrl}/${userId}/fav`);
  }

  addInFavoris(userId: string, candidatId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/addFavoris/${userId}/${candidatId}`, {});
  }

  removeFromFavoris(userId: string, candidatId: string): Observable<any> { 
    return this.http.delete(`${this.apiUrl}/${userId}/favoris/${candidatId}`);
}


  

  removeVote(userId: string, candidatId: string): Observable<any> {
    const url = `${this.apiUrl}/removeVote`;
    const body = { userId, candidatId };
    return this.http.post(url, body);
  }



}
