import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/user.store';
import { Store } from './store/store';
import { UserService } from './users.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [UsersModule], //// User module sperate define and pass through the app.module.ts
  controllers: [UsersController],
  providers: [UserService, UserStore],
  // providers: [UserStore],
  // providers: [{ provide: UserStore, useClass: Store }],

})
export class AppModule { }
