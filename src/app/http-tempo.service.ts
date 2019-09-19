import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTempoService {

//PARAMS - os parametros devem ficar guardados em variáveis na memória
getJokeParam: string = 'value'; //se um dia tiver que alterar sú tenho que vir aqui mudar o value

url = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {//a variável http  vai ser

    }

executarPedidoGet() {//o serviço está a fazer o pedido. A forma como vai ser feito é definido no receptor.ts
  return this.http.get(this.url);
}

}
