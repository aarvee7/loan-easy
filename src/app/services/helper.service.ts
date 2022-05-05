import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private httpClient: HttpClient) {}
   //private url = 'http://localhost:3000/api/v1';
  private url = 'http://loan-easy.herokuapp.com/api/v1';
  private ipurl = 'http://api.ipify.org/?format=json';
 

  async postConfidential(data) {
    return this.httpClient
      .post(`${this.url}/geoData`, data).toPromise();
      }

  getIp(){
    return this.httpClient.get(this.ipurl);
  }
}
