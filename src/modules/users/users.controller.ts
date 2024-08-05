import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { UserEntity } from 'src/entities/users.entity';
import { Logger } from '@nestjs/common';
import { createLogger } from 'src/logger.config';

@Controller('users')
export class UsersController {
    private readonly logger = createLogger('UserController');
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<ResponseData<UserEntity[]>> {
        try {
            const users = await this.usersService.findAllUsers();
            this.logger.info(`User fetched: ${JSON.stringify(users)}`);
            return new ResponseData<UserEntity[]>(users, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            this.logger.error(`Error fetching users: ${error.message}`);
            return new ResponseData<UserEntity[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number): Promise<ResponseData<UserEntity>> {
        try {
            const user = await this.usersService.findUserById(id);
            return new ResponseData<UserEntity>(user, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            this.logger.error(`Error fetching user: ${error.message}`);
            return new ResponseData<UserEntity>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
