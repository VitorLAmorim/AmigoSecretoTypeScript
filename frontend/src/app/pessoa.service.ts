import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }
  getPessoa():Observable<IPessoa[]> {
    return this.http.get<IPessoa[]>("http://localhost:8080/home/");}
}
