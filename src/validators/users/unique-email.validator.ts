import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from 'src/modules/users/users.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  async validate(email: string, args: ValidationArguments): Promise<boolean> {
      const user = await this.usersService.findUserByEmail(email);
      return !user;
  }

  defaultMessage(args: ValidationArguments): string {
      return 'Email $value already exists. Choose another email.';
  }
}
