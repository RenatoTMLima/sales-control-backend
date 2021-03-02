import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.model';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOneUserById(id: number): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async findOneUserByName(name: string): Promise<User> {
    return await this.usersRepository.findOne({ name });
  }
}
