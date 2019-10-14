import { Component, OnInit } from '@angular/core';
import { ApiInternaService } from 'src/app/api-interna.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent implements OnInit {
  cliente: Cliente; // esta propriedade é um objecto do tipo Cliente

    // Variáveis para o ngModel para criar um cliente novo
    codCliente: number;
    telefone: string;
    email: string;
    nome: string;
    dataNasc: any;
    genero: string;

    clienteServiceCaminho: ApiInternaService;
  constructor(private clienteService: ApiInternaService) {
    this.clienteServiceCaminho = clienteService;
   }

  ngOnInit() {
  }


    // Função do botão POST "Adicionar Cliente" que guarda, através do serviço da API Interna, os dados de um novo cliente na BD
    onCreatePost(postData: Cliente) {
      this.clienteServiceCaminho.createCliente(new Cliente(
        this.codCliente, this.telefone, this.email, this.nome, this.dataNasc, this.genero)).subscribe(
        responseData => {
          console.log(responseData); }
        );
    }
}
