import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pesquisar-livros',
  templateUrl: './pesquisar-livros.component.html',
  styleUrls: ['./pesquisar-livros.component.sass']
})
export class PesquisarLivrosComponent implements OnInit {

  @Output() public emmitPesquisar: EventEmitter<string> = new EventEmitter();

  pesquisarTexto = "";
  constructor() { }

  ngOnInit(): void {
  }

  pesquisar(){
    this.emmitPesquisar.emit(this.pesquisarTexto)
  }

}
