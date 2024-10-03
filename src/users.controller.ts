import { Controller, Get, Post, Put, Delete, Patch, Req, HttpCode, Res, Header, Param, Body } from '@nestjs/common'; // Decorator
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto/create-user-dto';

const USERS = [];

@Controller("/users") // User Decorator
export class UsersController {

    @Get("/profile")
    @Header("Content-Type", "application/json")
    getProfile(@Req() req: Request, @Res() res: Response) {
        res.json({
            message: "Hello, World!"
        })
    }

    @Get("/videos/:id")
    getVideos(@Param('id') param: number) {
        console.log(param);
        return `Showing videos`;
    }

    @Post("/addUser")
    addUser(@Body() createUserDto: CreateUserDTO) {
        USERS.push(createUserDto);
        return "User added";
    }

    @Get("/allUsers")
    getAllUsers() {
        return USERS;
    }

    @Get("/sigleUser/:id")
    getUser(@Param('id') id: number) {
        return USERS.find(user => user.id == +id);
    }

    @Put("/updateUser/:id")
    getUserUpdate(@Param('id') id: number,@Body() createUserDto: CreateUserDTO) {
        const user = USERS.find(user => user.id == +id);
        user.name = createUserDto.name;
        user.age = createUserDto.age;
        user.id = createUserDto.id;
        return "User updated";
    }

}
