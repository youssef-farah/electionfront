import { Condidat } from "./condidat";
import { User } from "./user";

export class Admin extends User{
    role: string

  constructor(_id:Number,nom: string, prenom: string, cin: string, password: string, date_naissance: Date, voted: boolean, favoris: Condidat[], role: string) {
    super(_id,nom, prenom, cin, password, date_naissance, voted, favoris)
    this.role = role
  }

}
