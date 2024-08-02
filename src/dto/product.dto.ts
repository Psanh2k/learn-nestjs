import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class ProductDto {
    @IsNotEmpty({ message: 'This field must be required!'})
    categoryId?: number;

    @MinLength(5, { message: 'This field must be than 5 character!'})
    productName?: string;

    @IsNumber()
    price?: number;
}