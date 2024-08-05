import { UsersService } from './modules/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/products/product.module';
import { DataSource } from 'typeorm';
import { UserEntity } from './entities/users.entity';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    UsersModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'root',
      database: 'project_k4',
      entities: [UserEntity],
      synchronize: true,
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
