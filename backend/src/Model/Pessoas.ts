import { ObjectId } from "mongodb";

export default class Pessoa {
    constructor(public name: string, public email: string, public id?: ObjectId) {}
}

