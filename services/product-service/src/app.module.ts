import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}