import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { SearchModule } from './search/search.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}