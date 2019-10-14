import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './models/cliente';


@Injectable({providedIn: 'root'})


export class ApiInternaService {

  // getNomeCliente: string = 'nome';

  urlCliente = 'https://localhost:44387/api/cliente'; // 2º variable which stores the address of the remote API server
  urlTipoQuartoTodos = 'https://localhost:44387/api/quarto/todos';
  urlTipoQuartoSingle = 'https://localhost:44387/api/quarto/single';
  urlTipoQuartoDouble = 'https://localhost:44387/api/quarto/double';
  urlTipoQuartoApartamento = 'https://localhost:44387/api/quarto/apartamento';

  constructor(private http: HttpClient) { }// 1º inject HttpClient as a private httpClient instance in the service's constructor

  // 3º add the methods for doing create, read, update and delete operations against the the www.server.com/api/customers endpoint.


  // Função GET que solicita à API que forneça os nosmes dos clientes
  public clienteGet() {// o serviço está a fazer o pedido. A forma como vai ser feito é definido no receptor.ts
    console.log(this.urlCliente);
    return this.http.get<Cliente>(this.urlCliente);
  }


  // Função POST que envia para a API os dados dos novos clientes
  public createCliente(postData: Cliente) {
     console.log(postData);
     return this.http.post(this.urlCliente, postData);
  } // post(`${this.urlCliente}/add`, postData);


  // Função POST que envia para a API os dados dos novos clientes
  public deleteCliente() {
    return this.http.delete(this.urlCliente);
  }


  public updateCliente(cliente: Cliente) {}

  public getClienteById(id: number) {}

  public getCliente(url?: string) {}

  // ----------------------- GET - TIPOS DE QUARTO ---------------------------------------------------

  // função que solicita API que fornece os quartos existentes de todos os tipos
  tipoQuartoTodosGet() {
    console.log(this.urlTipoQuartoTodos);
    return this.http.get(this.urlTipoQuartoTodos);
  }

  // função que solicita API que fornece a seleção dos quartos existentes do tipo single
  tipoQuartoSingleGet() {
    console.log(this.urlTipoQuartoSingle);
    return this.http.get(this.urlTipoQuartoSingle);
  }

  // função que solicita API que fornece a seleção dos quartos existentes do tipo double
  tipoQuartoDoubleGet() {
    console.log(this.urlTipoQuartoDouble);
    return this.http.get(this.urlTipoQuartoDouble);
  }

  // função que solicita API que fornece a seleção dos quartos existentes do tipo apartamento
  tipoQuartoApartamentoGet() {
    console.log(this.urlTipoQuartoApartamento);
    return this.http.get(this.urlTipoQuartoApartamento);
  }

  // ---------------------------------------------------------------------------------

}
