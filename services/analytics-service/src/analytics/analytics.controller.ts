import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsRecord, MetricType } from './analytics.entity';

class RecordDto {
  type: MetricType;
  data: any;
}

@Controller('analytics')
export class AnalyticsController {
  constructor(private svc: AnalyticsService) {}

  @Get()
  findAll(@Query('type') type?: MetricType): Promise<AnalyticsRecord[]> {
    return this.svc.findAll(type);
  }

  @Post()
  record(@Body() dto: RecordDto): Promise<AnalyticsRecord> {
    return this.svc.record(dto.type, dto.data);
  }
}