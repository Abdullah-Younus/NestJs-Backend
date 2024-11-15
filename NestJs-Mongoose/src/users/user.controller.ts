import { Controller, Post, Body, Get, Param, HttpException, Patch, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { throws } from "assert";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/UpdateUser.dto";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log('create User DTO', createUserDto);
        return this.userService.createUser(createUserDto);
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid ID', 404);
        const findUser = await this.userService.getUserById(id);
        if (!findUser) throw new HttpException('User Not Found', 404);
        return findUser;
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid ID', 404);
        const updateUser = await this.userService.updateUser(id, updateUserDto);
        if (!updateUser) throw new HttpException('User Not Found', 404);
        return updateUser;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid ID', 404);
        const deleteUser = await this.userService.deleteUser(id);
        if (!deleteUser) throw new HttpException('User Not Found', 404);
        return deleteUser;
    }


}