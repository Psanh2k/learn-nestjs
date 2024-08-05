import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { createLogger } from 'src/logger.config';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  private readonly logger = createLogger('LogRequest');
  constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

  async validate(email: string): Promise<boolean> {
    this.logger.error(`Error fetching users: ${this.usersService}`);
    const user = await this.usersService.findUserByEmail(email);
    return !user;
  }

  defaultMessage(): string {
    return 'Email $value is already taken';
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
}
