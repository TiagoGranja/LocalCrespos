import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiInternaService {

  //getNomeCliente: string = 'nome';

  url = 'https://localhost:44387/api/cliente';

  constructor(private http: HttpClient) { }

  clienteGet() {//o serviço está a fazer o pedido. A forma como vai ser feito é definido no receptor.ts
    console.log(this.url);
    return this.http.get(this.url);
  }
}
