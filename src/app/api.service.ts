import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  localUrl = 'https://randomuser.me/api';

  getData() {
    return this.http.get(this.localUrl);
  }
}
