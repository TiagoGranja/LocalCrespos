export class Comentario {
  public codComentario: number;
  public rating: number;
  public comentarios: string;

  constructor(codComentarioCom: number, ratingCom: number, comentariosCom: string) {
    this.codComentario = codComentarioCom;
    this.rating = ratingCom;
    this.comentarios = comentariosCom;
  }

}
