import { Commentaire } from "./commentaire";

export class Condidat {
    constructor(public _id:string,public nom:string,prenom:string,cin:string,date_naissance:Date,nb_vote:number,programme:string,comments:Commentaire[]){}
}
