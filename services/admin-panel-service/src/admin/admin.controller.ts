import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLog, AdminActionType } from './admin.entity';
import { AdminGuard } from '../auth/admin.guard';

class LogDto {
  action: AdminActionType;
  payload: any;
}

@UseGuards(AdminGuard)
@Controller('admin/logs')
export class AdminController {
  constructor(private svc: AdminService) {}

  @Get()
  findAll(): Promise<AdminLog[]> {
    return this.svc.findAll();
  }

  @Post()
  log(@Body() dto: LogDto): Promise<AdminLog> {
    return this.svc.log(dto.action, dto.payload);
  }
}
