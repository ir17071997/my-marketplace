import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { RecommendationsModule } from './recommendations/recommendations.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), RecommendationsModule],
})
export class AppModule {}