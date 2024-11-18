import { User } from "./user";

export class Commentaire {
    constructor(public _id:Number,public message:string,public user:User,public createdAt:Date){}
}
