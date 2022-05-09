import { LivrosService } from './../../services/livros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Livro } from 'src/app/shared/models/livro';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.sass'],
})
export class EditarLivroComponent implements OnInit {
  movieRatingOptions = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  form!: FormGroup;
  idLivro!: number;
  livro: Livro = {
    nome: '',
    observacao: '',
    avaliacao: 0,
  };

  constructor(
    private livrosService: LivrosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getLivro();
  }

  getLivro() {
    this.form = this.formBuilder.group({
      nome: [this.livro.nome, Validators.required],
      observacao: [this.livro.observacao],
      avaliacao: [''],
    });
    this.activateRouter.params
      .pipe(
        switchMap((params: Params) =>
          this.livrosService.getLivroById(params['id'])
        )
      )
      .subscribe((livro) => {
        this.livro = livro;
        livro = this.popularCamposVazios(livro);
        this.form.setValue({
          nome: livro.nome,
          observacao: livro.observacao,
          avaliacao: livro.avaliacao,
        });
      });
  }

  popularCamposVazios(livro: Livro): Livro {
    if (!livro.avaliacao) livro.avaliacao = 0;
    if (!livro.observacao) livro.observacao = '';
    return livro;
  }

  update() {
    this.popularLivro('nome', 'observacao', 'avaliacao');
    this.livrosService.update(this.livro).subscribe((res) => {
      console.log(res);
    });
  }

  popularLivro(nome: string, observacao: string, avaliacao: string) {
    this.livro.nome = this.form.get(nome)?.value;
    this.livro.observacao = this.form.get(observacao)?.value;
    this.livro.avaliacao = this.form.get(avaliacao)?.value;
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
