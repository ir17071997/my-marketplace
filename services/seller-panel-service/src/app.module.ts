import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), SellerModule],
})
export class AppModule {}