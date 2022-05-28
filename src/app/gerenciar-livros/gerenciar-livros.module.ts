import { MensagensComponent } from './../shared/mensagens/mensagens.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciarLivrosRoutingModule } from './gerenciar-livros-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GerenciarLivrosComponent } from './gerenciar-livros.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';


@NgModule({
  declarations: [
    GerenciarLivrosComponent,
    EditarLivroComponent,
    MensagensComponent
  ],
  imports: [
    CommonModule,
    GerenciarLivrosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GerenciarLivrosModule { }
