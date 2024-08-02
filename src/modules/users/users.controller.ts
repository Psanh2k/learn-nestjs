import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseData } from 'src/global/globalClass';
import { Users } from 'src/models/users.model';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { UserEntity } from 'src/entities/users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getProducts(): ResponseData<UserEntity> {
        try {
            return new ResponseData<UserEntity>(this.usersService.findAll(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<UserEntity>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
