import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/user.store';
import { Store } from './store/store';
@Module({
  controllers: [UsersController],
  providers: [{ provide: UserStore, useClass: Store }],
  // providers: [UserStore],

})
export class AppModule { }
