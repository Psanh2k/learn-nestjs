/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from 'src/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IsEmailUniqueConstraint } from 'src/validators/users/unique-email.validator';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers: [UsersService, IsEmailUniqueConstraint],
    exports: [UsersService],
})
export class UsersModule {}
