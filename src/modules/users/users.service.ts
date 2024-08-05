import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { UserEntity } from 'src/entities/users.entity';
import { Users } from 'src/models/users.model';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
      const { name, email, password, is_admin, is_super } = createUserDto;
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = this.userRepository.create({
          name,
          email,
          password: hashedPassword,
          is_admin,
          is_super,
      });
  
      return this.userRepository.save(user);
    }

    async findUserByEmail(email: string): Promise<UserEntity | null> {
      console.log(email);
      
      return this.userRepository.findOne({ where: { email } });
    }
}
