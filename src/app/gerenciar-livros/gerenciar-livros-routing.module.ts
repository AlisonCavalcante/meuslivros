import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarLivrosComponent } from './gerenciar-livros.component';

const routes: Routes = [
  {
    path: '',
    component: GerenciarLivrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarLivrosRoutingModule { }
