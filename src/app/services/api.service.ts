import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  getPostComments(postId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${postId}/comments`);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, postData);
  }

  addComment(postId: number, commentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts/${postId}/comments`, commentData);
  }
}

