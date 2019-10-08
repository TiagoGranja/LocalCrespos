import { Component, OnInit } from '@angular/core';
import { ApiInternaService } from '../api-interna.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  // cliente: Array<any>;
  cliente; // array embrulhado de valores que
  tipoQuartoTodos;
  tipoQuartoSingle;
  tipoQuartoDouble;
  tipoQuartoApartamento;

  // Select para selecionar o tipo de quarto a pesquisar
  tiposQuartos = [{name: 'todos'}, {name: 'single'}, {name: 'double'}, {name: 'apartamento'}];
  tipoQuartoSelecionadoObj = this.tiposQuartos[0];


  clienteServiceCaminho: ApiInternaService;
  constructor(clienteService: ApiInternaService) {
    this.clienteServiceCaminho = clienteService;
  }

  ngOnInit() {
  }

  pesquisarTipoQuarto(novoTipoQuarto) {
    console.log(novoTipoQuarto);
    if (novoTipoQuarto === this.tiposQuartos[0]) {
        this.clienteServiceCaminho.tipoQuatoTodosGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
        );
    } else if (novoTipoQuarto === this.tiposQuartos[1]) {
        this.clienteServiceCaminho.tipoQuatoSingleGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
      );
    } else if (novoTipoQuarto === this.tiposQuartos[2]) {
        this.clienteServiceCaminho.tipoQuatoDoubleGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
      );
    } else if (novoTipoQuarto === this.tiposQuartos[3]) {
        this.clienteServiceCaminho.tipoQuatoApartamentoGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
      );
    } else {}
  }

  // função que vai buscar ao serviço os valores do array clientes
  lerCliente() {
    this.clienteServiceCaminho.clienteGet().subscribe(
      (data) => { this.cliente = data; }// ver no postman que a data é um array
    );
  }

}
