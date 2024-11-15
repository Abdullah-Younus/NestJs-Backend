import { InjectModel } from '@nestjs/mongoose';
import { Post } from './../schemas/Post.schema';
import { HttpException, Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { CreatePostDto } from './dtos/CreatePost.dto';
import { User } from 'src/schemas/User.schema';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {

    }

    async createPost({ userId, ...createPostDto }: CreatePostDto) {
        const findUser = await this.userModel.findById(userId);
        if (!findUser) throw new HttpException('User Not Found', 404);
        const newPost = new this.postModel(createPostDto);
        const savedPost = await newPost.save();
        const updatedUser = await findUser.updateOne({
            $push: {
                posts: savedPost._id,

            },
        });
        return updatedUser;
    }

    findPostById() { }

}