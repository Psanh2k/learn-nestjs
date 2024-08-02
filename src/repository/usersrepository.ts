import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from 'src/entities/users.entity';


@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
