import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { AccountController } from "./controllers/account.controller";
import { UserService } from "./services/user.service";


@Module({
    controllers: [UserController, AccountController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {

}