import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), StoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}