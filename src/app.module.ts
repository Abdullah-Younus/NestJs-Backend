import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/user.store';
@Module({
  controllers: [UsersController],
  // providers: [{ provide: UserStore, useClass: UserStore }],
  providers: [UserStore],

})
export class AppModule { }
