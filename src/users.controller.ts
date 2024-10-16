import { Controller, Get, Post, Put, Delete, Patch, Req, HttpCode, Res, Header, Param, Body, Query } from '@nestjs/common'; // Decorator
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto/create-user-dto';

const USERS = [];

interface QueryParams {
    name: string;
    age: number
}


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
    getUserUpdate(@Param('id') id: number, @Body() createUserDto: CreateUserDTO) {
        const user = USERS.find(user => user.id == +id);
        user.name = createUserDto.name;
        user.age = createUserDto.age;
        user.id = createUserDto.id;
        return "User updated";
    }

    @Delete("/deleteUser/:id")
    deleteUser(@Param() params: Record<string, any>) {
        const user = USERS.find(user => user.id == +params.id);
        USERS.splice(USERS.indexOf(user), 1);
        console.log('params >>>', params);
        return "User deleted";
    }

    /// query parameter
    @Get('/video')
    getVideo(@Query('name') query: QueryParams) {
        console.log(query);
        return `Success`;
    }

}
