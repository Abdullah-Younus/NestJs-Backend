import {
    Controller,
    Get,
    Post,
    Param,
    Body,
} from '@nestjs/common'; // Decorator
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto/create-user-dto';
import { UserStore } from './store/user.store';
import { UserService } from './users.service';

interface QueryParams {
    name: string;
    age: number;
}

@Controller("/users") // User Decorator
export class UsersController {
    constructor(private userService: UserService) {
        console.log('store constructor >>', this.userService);
    }

    @Post("/addUser")
    addUser(@Body() createUserDto: CreateUserDTO) {
        this.userService.addUser(createUserDto);
        return { message: "Add User" }
    }

    @Get()
    findAllUser() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    findUser(@Param('id') id: number) {
        return this.userService.getUser(+id)
    }

}
