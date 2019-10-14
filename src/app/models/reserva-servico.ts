export class ReservaServico {
  public codReserva: number;
  public codServico: number;

  constructor(codReservaRS: number, codServicoRS: number) {
    this.codReserva = codReservaRS;
    this.codServico = codServicoRS;
  }

}
