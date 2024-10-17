import { Injectable } from "@nestjs/common";

interface User {
    id: number;
    name: string;
    age: number
}

@Injectable()
export class Store {

}