import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), AnalyticsModule],
})
export class AppModule {}