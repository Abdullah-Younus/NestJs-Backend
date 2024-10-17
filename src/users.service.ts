import { Body, Get, Injectable, Param, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto";

export interface User {
    id: number;
    name: string;
    age: number
}
const USERS = [];

@Injectable()
export class UserService {
    private store = new Map<number, User>();

    addUser(user: User) {
        this.store.set(user.id, user);
    }

    getAllUsers() {
        return USERS;
    }

    getUser(id: number) {
        return Array.from(this.store).map(([_, user]) => user);
    }

    updateUser(id: number, user: User) {
        this.store.set(id, user);
    }

    deleteUser(id: number) {
        this.store.delete(id);
    }

}