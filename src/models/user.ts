import { Condidat } from "./condidat";

export class User {
    constructor(public _id:Number,public nom:string,prenom:string,cin:string,password:string,date_naissance:Date,voted:Boolean,favoris:Condidat[]){}
}
