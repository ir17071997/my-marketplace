import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { RecommendationLog, RecommendationType } from './recommendation.entity';

class LogRecDto {
  userId: string;
  type: RecommendationType;
  results: any;
}

@Controller('recommendations')
export class RecommendationsController {
  constructor(private svc: RecommendationsService) {}

  @Get('personalized')
  personalized(@Query('userId') userId: string): Promise<any[]> {
    // TODO: реализовать логику рекомендаций
    return Promise.resolve([]);
  }

  @Get('bundles')
  bundles(@Query('productId') productId: string): Promise<any[]> {
    // TODO: реализовать логику часто покупаемых вместе
    return Promise.resolve([]);
  }

  @Get('logs')
  logs(@Query('userId') userId: string): Promise<RecommendationLog[]> {
    return this.svc.findAll(userId);
  }

  @Post('logs')
  log(@Body() dto: LogRecDto): Promise<RecommendationLog> {
    const { userId, type, results } = dto;
    return this.svc.log(userId, type, results);
  }
}