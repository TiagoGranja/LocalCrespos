import { Component, OnInit } from '@angular/core';
import { ApiInternaService } from '../api-interna.service';
import { Cliente } from '../models/cliente'; // importar a classe/model Cliente



@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})


export class ReservasComponent implements OnInit {

  cliente: Cliente; // esta propriedade é um objecto do tipo Cliente
  tipoQuartoTodos;
  tipoQuartoSingle;
  tipoQuartoDouble;
  tipoQuartoApartamento;


  // Variáveis para o ngModel para criar um cliente novo
  codCliente: number;
  telefone: string;
  email: string;
  nome: string;
  dataNasc: any;
  genero: string;

  // Variáveis do ngModel para selecionar datas de Check-In e Check-Out para verificar quartos desocupados
  checkinDate: any;
  checkoutDate: any;

  // Variáveis para o ngModel para selecionar o tipo de quarto a pesquisar
  tiposQuartos = [{name: 'Todos'}, {name: 'Single'}, {name: 'Double'}, {name: 'Apartamento'}];
  tipoQuartoSelecionadoObj = this.tiposQuartos[0];




  // Injectar o serviço da API Interna
  clienteServiceCaminho: ApiInternaService;
  constructor(private clienteService: ApiInternaService) {
    this.clienteServiceCaminho = clienteService;
  }

  ngOnInit() {
  }

  pesquisarTipoQuarto(novoTipoQuarto) {
    console.log(novoTipoQuarto);
    if (novoTipoQuarto === this.tiposQuartos[0]) {
        this.clienteServiceCaminho.tipoQuartoTodosGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
        );
    } else if (novoTipoQuarto === this.tiposQuartos[1]) {
        this.clienteServiceCaminho.tipoQuartoSingleGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
      );
    } else if (novoTipoQuarto === this.tiposQuartos[2]) {
        this.clienteServiceCaminho.tipoQuartoDoubleGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
      );
    } else if (novoTipoQuarto === this.tiposQuartos[3]) {
        this.clienteServiceCaminho.tipoQuartoApartamentoGet().subscribe(
          (data) => { this.tipoQuartoTodos = data; }// ver no postman que a data é um array
      );
    } else {}
  }


  // Função do botão GET "Ver Lista de Clientes" que solicita, através do serviço da API Interna, os clientes existentes na BD
  lerCliente() {
    this.clienteServiceCaminho.clienteGet().subscribe(
      (data) => { this.cliente = data; }
    );
  }


  // Função do botão POST "Adicionar Cliente" que guarda, através do serviço da API Interna, os dados de um novo cliente na BD
  onCreatePost(postData: Cliente) {
    this.clienteServiceCaminho.createCliente(new Cliente(
      this.codCliente, this.telefone, this.email, this.nome, this.dataNasc, this.genero)).subscribe(
      responseData => {
        console.log(responseData); }
      );
  }


  onClearPosts() {
    this.clienteServiceCaminho.deleteCliente().subscribe();
  }


}
