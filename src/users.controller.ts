import { Controller, Get, Post, Put, Delete, Patch, Req } from '@nestjs/common'; // Decorator
import { Request } from 'express';
@Controller("/users") // User Decorator
export class UsersController {

    @Get("/profile")
    getProfile(@Req() req: Request) {
        console.log('Hello Request ', req.params);
    }

}
