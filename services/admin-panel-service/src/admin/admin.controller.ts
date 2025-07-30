import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLog, AdminActionType } from './admin.entity';

class LogDto {
  action: AdminActionType;
  payload: any;
}

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