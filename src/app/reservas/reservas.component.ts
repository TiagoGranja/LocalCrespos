import { Component, OnInit } from '@angular/core';
import { ApiInternaService } from '../api-interna.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  cliente;


  clienteServiceCaminho: ApiInternaService;

  constructor(clienteService: ApiInternaService) {
    this.clienteServiceCaminho = clienteService;
  }

  ngOnInit() {
  }

  lerCliente() {
    this.clienteServiceCaminho.clienteGet().subscribe(
      (data) => { this.cliente = data; }// ver no postman que a data é um array
    );
  }

}
