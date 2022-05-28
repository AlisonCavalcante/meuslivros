import { Component, Input, OnInit } from '@angular/core';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.sass']
})
export class MensagensComponent implements OnInit {



  constructor(public mensagemService: MensagensService) { }

  ngOnInit(): void {
  }

  clear(){
    this.mensagemService.clear();
  }

}
