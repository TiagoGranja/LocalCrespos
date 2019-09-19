import { Component, OnInit } from '@angular/core';
import { HttpTempoService } from '../http-tempo.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  piada: string;

  jokeServiceCaminho: HttpTempoService;

  constructor(jokeService: HttpTempoService) {
    this.jokeServiceCaminho = jokeService;
  }


  ngOnInit() {}

  lerPiada(){
    this.jokeServiceCaminho.executarPedidoGet().subscribe(
      data => {this.piada = data[this.jokeServiceCaminho.getJokeParam]}// ver no postman que a data é um array
    )
  }

}
