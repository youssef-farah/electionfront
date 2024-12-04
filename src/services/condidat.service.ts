import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

 
  private apiUrl = 'http://localhost:4005/api/candidats'; // Adjust to your backend URL

  constructor(private http: HttpClient) { }

  // GET all candidats 
  getCandidats(): Observable<any> {
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

  addVote(userId: string, candidatId: string): Observable<any> {
    const url = `${this.apiUrl}/${candidatId}/vote/${userId}`;
    const body = { userId, candidatId };
    return this.http.put(url,null);
  }

  addComment(candidatId:string,userId:string,message:string): Observable<any>{
    let comment = {"message" : message}
    return this.http.post(this.apiUrl+`/${candidatId}/comment/${userId}`,comment)
  }

  deleteComment(candidatId:string,commentId:Number): Observable<any>{
    return this.http.delete(this.apiUrl+`/${candidatId}/comment/${commentId}`)
  }


  getCandidatsPourcentages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vote-percentages`);
  }

 
}
