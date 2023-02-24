import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { IPessoa } from '../pessoa';
import {  ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  

  public pessoa:any = [];
  constructor(private pessService: PessoaService,private route: ActivatedRoute) { }

  ngOnInit(): void {    
    const id = this.route.snapshot.paramMap.get('id')!;
    this.pessService.getPessoa(id).subscribe(
      data => {
        this.pessoa = data;
      }
    );
    
  }

  public editarForm(pessoaform:NgForm){
    
    if(pessoaform.form.value._id!=this.pessoa._id){
      pessoaform.form.value._id=this.pessoa._id
    }
    if(!pessoaform.form.value.name){
      pessoaform.value.name=this.pessoa.name
    }
    if(!pessoaform.form.value.email){
      pessoaform.form.value.email=this.pessoa.email
    }
    console.log(pessoaform.form.value);  
    this.pessService.atualizaPessoa(pessoaform.form.value);
    
  }


}



