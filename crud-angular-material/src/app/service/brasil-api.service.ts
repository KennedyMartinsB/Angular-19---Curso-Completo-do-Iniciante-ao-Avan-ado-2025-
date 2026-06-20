import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../interface/brasil-api/brasilapi.models';
@Injectable({
  providedIn: 'root'
})
export class BrasilApiService {

  baseUrl = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) { }

  getUfs(): Observable<Estado[]> {
    const path = this.baseUrl + '/ibge/uf/v1'
    return this.http.get<Estado[]>(path)
  }
}
