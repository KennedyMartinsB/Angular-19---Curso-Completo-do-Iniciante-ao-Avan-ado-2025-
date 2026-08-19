import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  private readonly url = 'http://localhost:3000/lugares'

  constructor(private http: HttpClient) { }

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.url, lugar)
  }

  obterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.url)
  }
}
