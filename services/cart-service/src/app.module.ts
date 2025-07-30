import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), CartModule, WishlistModule],
  providers: [],
})
export class AppModule {}