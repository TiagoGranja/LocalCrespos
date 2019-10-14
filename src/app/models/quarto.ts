export class Quarto {
  public codQuarto: number;
  public codTipoQuarto: number;
  public capacidade: number;
  public area: number;
  public imagem: any;
  public preco: number;
  public numQuarto: number;
  public descr: string;


  constructor(codQuartoQ: number, codTipoQuartoQ: number, capacidadeQ: number, areaQ: number, imagemQ: any, precoQ: number, numQuartoQ: number, descrQ: string) {
    this.codQuarto = codQuartoQ;
    this.codTipoQuarto = codTipoQuartoQ;
    this.capacidade = capacidadeQ;
    this.area = areaQ;
    this.imagem = imagemQ;
    this.preco = precoQ;
    this.numQuarto = numQuartoQ;
    this.descr = descrQ;
  }

}
