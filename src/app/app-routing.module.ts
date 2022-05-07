import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gerenciar',
    loadChildren: ()=> import ('./gerenciar-livros/gerenciar-livros.module').then((g) => g.GerenciarLivrosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
