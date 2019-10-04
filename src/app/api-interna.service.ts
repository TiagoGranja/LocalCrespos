import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './models/cliente';



@Injectable({
  providedIn: 'root'
})
export class ApiInternaService {

  //getNomeCliente: string = 'nome';

  urlCliente = 'https://localhost:44387/api/cliente'; //2º variable which stores the address of the remote API server
  urlTipoQuartoTodos = 'https://localhost:44387/api/quarto/desc';
  urlTipoQuartoSingle = 'https://localhost:44387/api/quarto/desc';
  urlTipoQuartoDouble = 'https://localhost:44387/api/quarto/desc';
  urlTipoQuartoApartamento = 'https://localhost:44387/api/quarto/desc';

  constructor(private http: HttpClient) { }//1º inject HttpClient as a private httpClient instance in the service's constructor

  //3º add the methods for doing create, read, update and delete operations against the the www.server.com/api/customers endpoint.

  //função GET que solicita API que fornece os nosmes dos clientes
  clienteGet() {//o serviço está a fazer o pedido. A forma como vai ser feito é definido no receptor.ts
    console.log(this.urlCliente);
    return this.http.get(this.urlCliente);
    //return this.http.get<any[]>(this.urlCliente);
  }

  public createCliente(cliente: Cliente){}

  public updateCliente(cliente: Cliente){}

  public deleteCliente(id: number){}

  public getClienteById(id: number){}

  public getCliente(url?: string){}

  //----------------------- GET - TIPOS DE QUARTO ---------------------------------------------------

  //função que solicita API que fornece os quartos existentes de todos os tipos
  tipoQuatoTodosGet() {
    console.log(this.urlTipoQuartoTodos);
    return this.http.get(this.urlTipoQuartoTodos);
  }

  //função que solicita API que fornece a seleção dos quartos existentes do tipo single
  tipoQuatoSingleGet() {
    console.log(this.urlTipoQuartoSingle);
    return this.http.get(this.urlTipoQuartoSingle);
  }

  //função que solicita API que fornece a seleção dos quartos existentes do tipo double
  tipoQuatoDoubleGet() {
    console.log(this.urlTipoQuartoDouble);
    return this.http.get(this.urlTipoQuartoDouble);
  }

  //função que solicita API que fornece a seleção dos quartos existentes do tipo apartamento
  tipoQuatoApartamentoGet() {
    console.log(this.urlTipoQuartoApartamento);
    return this.http.get(this.urlTipoQuartoApartamento);
  }

  //---------------------------------------------------------------------------------


}
