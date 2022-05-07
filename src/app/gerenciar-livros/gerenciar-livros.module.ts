import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciarLivrosRoutingModule } from './gerenciar-livros-routing.module';
import { GerenciarLivrosComponent } from './gerenciar-livros.component';


@NgModule({
  declarations: [
    GerenciarLivrosComponent
  ],
  imports: [
    CommonModule,
    GerenciarLivrosRoutingModule
  ]
})
export class GerenciarLivrosModule { }
