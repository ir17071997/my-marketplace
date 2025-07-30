import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}