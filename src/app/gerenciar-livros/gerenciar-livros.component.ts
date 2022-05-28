import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivrosService } from '../services/livros.service';
import { MensagensService } from '../services/mensagens.service';
import { Livro } from '../shared/models/livro';

@Component({
  selector: 'app-gerenciar-livros',
  templateUrl: './gerenciar-livros.component.html',
  styleUrls: ['./gerenciar-livros.component.sass']
})
export class GerenciarLivrosComponent implements OnInit {

  form!: FormGroup;
  livros: Livro [] = [];
  constructor(private livrosService: LivrosService, private formBuilder: FormBuilder,private mensagensService: MensagensService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required]
    })
    this.livrosService.getLivros().subscribe((res) => {
      this.livros = res;
    })
  }
  cadastrar(){
     this.livrosService.create(this.form.value).subscribe((res) => {
       this.livros.push(res);
       this.mensagensService.addMensagem("Livro Cadastrado com Sucesso");
       this.form.reset()
     })
  }

  excluir(livro: Livro, index: number){
    this.livrosService.delete(livro).subscribe((res) =>{
      this.livros.splice(index,1)
    })
  }

  resetForm(){
    this.form.reset()
  }
}
