import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  objetos = [{nome: 'Angelo', profissao: 'Cientista', sobre: 'Cara Chato'}];
  nome;
  sobre;
  profissao;

  Adicionar(){
    this.objetos.push({ nome: this.nome , profissao: this.profissao, sobre: this.sobre});
    this.nome = '';
    this.profissao = '';
    this.sobre = '';
  }

  excluir(i){
      this.objetos.splice(i, 1);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
