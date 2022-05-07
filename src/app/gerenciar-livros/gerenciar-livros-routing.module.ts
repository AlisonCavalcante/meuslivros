import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarLivrosComponent } from './gerenciar-livros.component';

const routes: Routes = [
  {
    path: '',
    component: GerenciarLivrosComponent
  },
  {
    path:'edit/:id',
    component: EditarLivroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarLivrosRoutingModule { }
