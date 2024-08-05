import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/users.entity';
import { Users } from 'src/models/users.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>,
    ) {}
    
    async findAllUsers(): Promise<UserEntity[]> {
      return this.userRepository.find();
    }

    async findUserById(id: number): Promise<UserEntity> {
      // return this.userRepository.findOne({ where: { id } });
      return this.userRepository.findOneBy({ id });
    }

}
