import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "src/dto";
import { UsersService } from "./users.service";


@Controller('/users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post()
    createUser(@Body() CreateUserDTO: any) {
        return this.userService.addUser(CreateUserDTO);
    }

    @Get()
    fetchAllUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    findUser(@Param('id') id: number) {
        return this.userService.getUser(+id);
    }

    @Put(":id")
    updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
        return this.userService.updateUser(+id, updateUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(+id);
    }

}