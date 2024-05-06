import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'http://localhost';
  PORT: number = 8080;

  get addressAgents() {
    return `${this.baseURL}:${this.PORT}/agents`;
  }

  constructor(private httpClient: HttpClient) {}

  getAllArts() {
    return this.httpClient.get(`${this.addressAgents}/picture`);
  }
}
