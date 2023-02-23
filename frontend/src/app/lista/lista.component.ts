import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { IPessoa } from '../pessoa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent {


  
  public pessoa:any = [];
  constructor(private pessService: PessoaService) { }
  ngOnInit(): void {
    this.pessService.getPessoa().subscribe(
      data => {
        this.pessoa = data;
      }
    );
  }


  public formMessage!:string;
  public onSubmitForm(){
    
    const pessoa :IPessoa={

    }

    return this.formMessage = 'obrigado por registrar-se'
  }

}
