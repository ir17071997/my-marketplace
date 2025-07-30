import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { SellerProduct } from './seller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerProduct])],
  providers: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}