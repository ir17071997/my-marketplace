import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), NotificationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}