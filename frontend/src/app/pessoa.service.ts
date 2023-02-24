import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IPessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  

  private handleError(error: any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  constructor(private http: HttpClient) { }

  getPessoas():Observable<IPessoa[]> {
    return this.http.get<IPessoa[]>("http://localhost:8080/home/");}

  getPessoa(id:string):Observable<IPessoa[]> {
 
      return this.http.get<IPessoa[]>("http://localhost:8080/home/"+id);}

  deletaPessoa(id:string){
 
    return this.http.delete<string>("http://localhost:8080/home/"+id).subscribe(
      {next: (resultado)=> console.log(resultado),
       error: (erro)=> console.log(erro.status ),
       complete: () => console.info("complete")
      })
    }
  
  atualizaPessoa(pessoa:IPessoa){
    const id = pessoa._id;
    delete pessoa._id;
    return this.http.put<string>("http://localhost:8080/home/"+id,pessoa).subscribe(
      {next: (resultado)=> console.log(resultado),
       error: (erro)=>{ if(erro.status == 202) { console.log('deu bom');}},
       complete: () => console.info("complete")
      })

  }

  postPessoa(pessoa:IPessoa) {
 
    return this.http.post<string>("http://localhost:8080/home/",pessoa).subscribe(
      {next: (resultado)=> console.log(resultado),
       error: (erro)=>{ if(erro.status == 202) { console.log('deu bom');}},
       complete: () => console.info("complete")
      }); }
  
}

