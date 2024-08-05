import { Controller, Get, Post, Put, Delete, Param, Body, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";
import { createLogger } from 'src/logger.config';

@Controller('products')

export class ProductController {
    private readonly logger = createLogger('ProductController');
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): ResponseData<Product[]> {
        try {
            this.logger.info(`Products fetched: ${JSON.stringify(this.productService.getProducts())}`);
            return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Post()
    // @Body(new ValidationPipe)
    createProduct(@Body() poroductDto: ProductDto): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.createProduct(poroductDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get(':id')
    detailProduct(@Param('id') id: number): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.detailProduct(id) ?? {}, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    
    @Put(':id')
    updateProduct(@Body() poroductDto: ProductDto, @Param('id') id: number): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.updateProduct(poroductDto, id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    
    @Delete(':id')
    deleteProduct(@Param('id') id: number): ResponseData<boolean> {
        try {
            return new ResponseData<boolean>(this.productService.deleteProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}