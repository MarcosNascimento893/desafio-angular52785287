import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  login(nome: string, senha: string) {
    return this.http.post(`${this.baseUrl}/login`, { nome, senha });
  }
}