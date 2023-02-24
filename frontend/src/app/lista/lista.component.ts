import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { IPessoa } from '../pessoa';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent {

  
  public pessoa:any = [];
  constructor(private pessService: PessoaService) { }
  ngOnInit(): void {    
    this.pessService.getPessoas().subscribe(
      data => {
        this.pessoa = data;
      }
    );
  }


public deleteForm(id:string){

    const resposta = this.pessService.deletaPessoa(id);
    alert(resposta);
    location.reload();
     
  
}


  public onSubmitForm(cadastro:NgForm){
    console.log(cadastro.form.value);
    this.pessService.postPessoa(cadastro.form.value);
    location.reload();

 
  }

}
