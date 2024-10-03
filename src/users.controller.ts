import { Controller, Get, Post, Put, Delete, Patch, Req, HttpCode, Res, Header, Param } from '@nestjs/common'; // Decorator
import { Request, Response } from 'express';
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
}
