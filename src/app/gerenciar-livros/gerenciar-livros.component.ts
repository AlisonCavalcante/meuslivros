import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivrosService } from '../services/livros.service';
import { MensagensService } from '../services/mensagens.service';
import { Livro } from '../shared/models/livro';

@Component({
  selector: 'app-gerenciar-livros',
  templateUrl: './gerenciar-livros.component.html',
  styleUrls: ['./gerenciar-livros.component.sass'],
})
export class GerenciarLivrosComponent implements OnInit {
  form!: FormGroup;
  formFiltro!: FormGroup;
  livros: Livro[] = [];
  setLivros: Livro[] = [];
  totalLivros!: number;
  categorias: string [] = ['Ação', 'Investimentos', 'Ficção Científica'];
  categoria: string = '';
  constructor(
    private livrosService: LivrosService,
    private formBuilder: FormBuilder,
    private mensagensService: MensagensService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      categorias: ['Ação', Validators.required],
    });

    this.formFiltro = this.formBuilder.group({
      categorias: [ null, Validators.required]
    })

    this.livrosService.getLivros().subscribe((res) => {
      this.livros = res;
      this.setLivros = res;
      this.getTotal(this.livros.length);
    });


  }
  cadastrar() {
   const livro: Livro = {
      nome: this.form.get('nome')?.value.toUpperCase(),
      observacao: '',
      avaliacao: 0,
      categoria: this.form.get('categorias')?.value.toUpperCase(),
    }
    this.livrosService.create(livro).subscribe((res) => {
      this.livros.push(res);
      this.mensagensService.addMensagem('Livro Cadastrado com Sucesso');
      this.form.reset();
    });

  }

  getTotal(total: number){

    this.totalLivros = total;
  }

  excluir(livro: Livro, index: number) {
    this.livrosService.delete(livro).subscribe((res) => {
      this.livros.splice(index, 1);
    });
  }

  resetForm() {
    this.form.reset();
  }

  getPesquisar(event: string) {
    const filtro = this.setLivros.filter((res: any) => {
      console.log(res.nome.indexOf(event));
      return !res.nome.indexOf(event.toUpperCase());
    });
    this.livros = filtro;
  }
  teste(){
    // const categoria = this.formFiltro.get('categorias')?.value
   const filtro = this.setLivros.filter((res:any) => {
     console.log(res.categoria === this.formFiltro.get('categorias')?.value)
      return !res.categoria === this.formFiltro.get('categorias')?.value;
   })
   console.log(filtro)
  }
}
