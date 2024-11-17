import { Commentaire } from "./commentaire";
import { User } from "./user";

export class Condidat {
    constructor(public _id:string,public nom:string,public prenom:string,public cin:string, public date_naissance:Date,public nb_vote:number,public programe:string,public comments:Commentaire[],public voters:User[]){}
}
