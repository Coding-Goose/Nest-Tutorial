import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UserController } from './user.controller';
import { MoviesModule } from '../movies/movies.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MoviesModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {
}
