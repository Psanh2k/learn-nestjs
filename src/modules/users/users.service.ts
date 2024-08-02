import { Injectable } from '@nestjs/common';
import { Users } from 'src/models/users.model';

@Injectable()
export class UsersService {
    getAllUsers(): Users[] {
        return [];
    }
}
