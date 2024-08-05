import { IsString, IsEmail, IsNotEmpty, IsNumber, IsEmpty, Validate } from 'class-validator';
import { UserEntity } from 'src/entities/users.entity';
import { IsUnique } from 'src/validators/users/unique-email.validator';
import { IsNull } from 'typeorm';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsUnique(UserEntity, { message: 'Email is already registered' })
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  is_admin: number;

  @IsNumber()
  is_super: number;

  @IsEmpty()
  google_id?: string;

  @IsEmpty()
  remember_token?: string;
}
