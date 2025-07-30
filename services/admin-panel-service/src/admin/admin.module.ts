import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminLog } from './admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminLog])],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}