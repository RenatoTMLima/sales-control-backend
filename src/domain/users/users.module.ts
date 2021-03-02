import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { UsersRepository } from './repository/users.repository';
import { FindOneService } from './services/findOneUser.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersRepository, FindOneService],
})
export class UsersModule {}
