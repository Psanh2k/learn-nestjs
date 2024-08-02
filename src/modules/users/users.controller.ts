import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseData } from 'src/global/globalClass';
import { Users } from 'src/models/users.model';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getProducts(): ResponseData<Users[]> {
        try {
            return new ResponseData<Users[]>(this.usersService.getAllUsers(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Users[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
