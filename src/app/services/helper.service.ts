import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private httpClient: HttpClient) {}
  private url = 'http://localhost:3000/api/v1';
  getData() {
    return this.httpClient.get(this.url + '/db');
  }
}
