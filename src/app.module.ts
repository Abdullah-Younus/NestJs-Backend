import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/user.store';
import { Store } from './store/store';
import { UserService } from './users.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './user-controller/users.service';
@Module({
  imports: [UsersModule], //// User module sperate define and pass through the app.module.ts
  controllers: [UsersController],
  providers: [UserService, UserStore, UsersService],
  // providers: [UserStore],
  // providers: [{ provide: UserStore, useClass: Store }],

})
export class AppModule { }
