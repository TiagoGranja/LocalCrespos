export class Reserva {
  public codReserva: number;
  public codCliente: number;
  public codComentario: number;

  constructor(codReservaR: number, codClienteR: number, codComentarioR: number) {
    this.codReserva = codReservaR;
    this.codCliente = codClienteR;
    this.codComentario = codComentarioR;
  }

}

