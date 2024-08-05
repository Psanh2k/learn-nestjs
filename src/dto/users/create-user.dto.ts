import { IsString, IsEmail, IsNotEmpty, IsNumber, IsEmpty, Validate } from 'class-validator';
import { IsEmailUnique } from 'src/validators/users/unique-email.validator';
import { IsNull } from 'typeorm';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsEmailUnique()
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
