import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl: string = environment.apiUrl
  private readonly url = this.apiUrl + '/categorias'
  constructor(private http: HttpClient) { }

  salvar(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.url, categoria)
  }

  obterTodas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url)
  }
}
