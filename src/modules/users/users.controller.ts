import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { UserEntity } from 'src/entities/users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<ResponseData<UserEntity[]>> {
        try {
            const users = await this.usersService.findAllUsers();
            return new ResponseData<UserEntity[]>(users, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<UserEntity[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
