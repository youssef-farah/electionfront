import { Condidat } from "./condidat";

export class User {
    constructor(public _id:Number,public nom:string,public prenom:string,public cin:string,public password:string,public date_naissance:Date,public voted:Boolean,public favoris:Condidat[]){}
}
