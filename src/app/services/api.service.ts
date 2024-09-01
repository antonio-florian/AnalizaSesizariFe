import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Fetch all posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  // Fetch a single post by ID
  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  // Fetch comments for a specific post
  getPostComments(postId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${postId}/comments`);
  }

  // Create a new post
  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, postData);
  }

  // Add a comment to a specific post
  addComment(postId: number, commentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts/${postId}/comments`, commentData);
  }

  // User login
  login(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, userData);
  }

  // User registration
  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, userData);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/${postId}`);
  }
  
  deleteComment(postId: number, commentId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/${postId}/comments/${commentId}`);
  }

  // Optional: Fetch user details (if you want to show user details)
  getUserProfile(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }
}
