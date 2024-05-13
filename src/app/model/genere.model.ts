import { Film } from "./film.model";

export interface Genere {
  idGenere: number;
  descrizione: string;
  film: Film[];
}
