import { Module, Post } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema } from "src/schemas/Post.schema";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { User, UserSchema } from "src/schemas/User.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Post.name,
                schema: PostSchema,
            },
            {
                name: User.name,
                schema: UserSchema,
            },
        ])
    ],
    controllers: [PostsController],
    providers: [PostsService],
})

export class PostsModule {

}