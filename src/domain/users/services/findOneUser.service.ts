import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class FindOneService {
  constructor(private userRepository: UsersRepository) {}

  async findOneUserByName(name: string): Promise<User> {
    return await this.userRepository.findOneUserByName(name);
  }
}
