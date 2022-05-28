import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensagensService {
  mensagens = '';

  constructor() {}

  addMensagem(mensagem: string) {
    this.mensagens = mensagem;
    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear() {
    this.mensagens = '';
  }
}
