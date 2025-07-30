import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification, NotificationType } from './notification.entity';

class CreateNotificationDto {
  userId: string;
  type: NotificationType;
  payload: any;
}

@Controller('notifications')
export class NotificationsController {
  constructor(private svc: NotificationsService) {}

  @Get()
  findAll(@Body('userId') userId: string): Promise<Notification[]> {
    return this.svc.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Notification> {
    return this.svc.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateNotificationDto): Promise<Notification> {
    const { userId, type, payload } = dto;
    return this.svc.create(userId, type, payload);
  }

  @Post(':id/read')
  markRead(@Param('id') id: string): Promise<Notification> {
    return this.svc.markRead(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.svc.remove(id);
  }
}