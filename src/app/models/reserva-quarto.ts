export class ReservaQuarto {
  public codQuarto: number;
  public codReserva: number;
  public dataIn: Date;
  public dataOut: Date;
  public numAdultos: number;
  public numCriancas: number;

  constructor(codQuartoRQ: number, codReservaRQ: number, dataInRQ: Date, dataOutRQ: Date, numAdultosRQ: number, numCriancasRQ: number) {
    this.codQuarto = codQuartoRQ;
    this.codReserva = codReservaRQ;
    this.dataIn = dataInRQ;
    this.dataOut = dataOutRQ;
    this.numAdultos = numAdultosRQ;
    this.numCriancas = numCriancasRQ;
  }

}
