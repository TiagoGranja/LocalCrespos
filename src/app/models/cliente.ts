export class Cliente {
  public cod_Cliente: number;
  public telefone: string;
  public email: string;
  public nome: string;
  public data_Nasc: Date;
  public genero: string;

  constructor( codClienteC: number, telefoneC: string, emailC: string, nomeC: string, dataNascC: Date, generoC: string) {
    this.cod_Cliente = codClienteC;
    this.telefone = telefoneC;
    this.email = emailC;
    this.nome = nomeC;
    this.data_Nasc = dataNascC;
    this.genero = generoC;
  }

}
