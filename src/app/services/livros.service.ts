import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/shared/models/livro';
import { Constantes } from '../shared/utils/constantes';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(Constantes.URL_BASE);
  }

  getLivroById(id: number): Observable<Livro> {
    return this.http.get<Livro>(Constantes.URL_BASE + id);
  }

  create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(Constantes.URL_BASE, livro);
  }

  update(livro: Livro): Observable<Livro> {
    return this.http.patch<Livro>(Constantes.URL_BASE + livro._id, livro);
  }

  delete(livro: Livro) {
    return this.http.delete(Constantes.URL_BASE + livro._id);
  }
}
